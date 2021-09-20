/* eslint-disable react/forbid-dom-props */
import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useHistory } from 'react-router';

import CustomButton from 'components/CustomButton';
import { CartContext } from 'contexts/Cart';
import { Product } from 'interface/Products';
import { handleDiscountPercentage } from 'utils/randomNumber';
import CustomModal from 'components/CustomModal';
import paths from 'components/Routes/paths';
import FormInput from 'components/FormInput';

import Carousel from './components/Carousel';
import styles from './styles.module.scss';

interface Props {
  product: Product;
}

function Description({ product }: Props) {
  const history = useHistory();
  const { t } = useTranslation('Product');
  const { addProductToCart, removeModal, showModal } = useContext(CartContext);

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addProductToCart(product, quantity);
  };

  const handleGoToCart = () => {
    history.push(paths.cart);
    removeModal();
  };

  const handleGoToStore = () => {
    history.push(paths.store);
    removeModal();
  };

  const handleQuantity = (type: boolean) => {
    if (type && quantity < product.stock) {
      setQuantity((prevState) => prevState + 1);
    } else if (!type && quantity > 1) {
      setQuantity((prevState) => prevState - 1);
    }
  };

  return (
    <>
      <CustomModal
        title={t('productAdded')}
        body={t('body', { product: product.name })}
        show={showModal}
        acceptButtonText={t('goToCart')}
        cancelButtonText={t('goBackToStore')}
        acceptButtonOnClick={handleGoToCart}
        cancelButtonOnClick={handleGoToStore}
        close={() => removeModal()}
      />
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Carousel slides={product.image} />
        </div>
        <div className={styles.separador} />
        <div className={styles.textSection}>
          <div>
            <h3 className={styles.title}>
              {product.name} -{' '}
              <span className={styles.price}>
                ${handleDiscountPercentage(product.discount, product.price)}
              </span>
              {product.discount && (
                <>
                  {' '}
                  <span className={styles.discount}>(${product.price})</span>
                </>
              )}
            </h3>
          </div>
          <p className={styles.text}>{product.description}</p>
          <div className={styles.lowerSection}>
            <span>{t('availableStock', { count: product.stock })}</span>
            <div className={styles.quantity}>
              <CustomButton
                label="-"
                small
                className={styles.customButton}
                onClick={() => handleQuantity(false)}
              />
              <FormInput
                name="quantity"
                required
                value={quantity}
                max={product.stock}
                min={1}
                inputType="number"
                onChange={(e) => setQuantity(Number(e.currentTarget.value))}
              />
              <CustomButton
                label="+"
                small
                className={styles.customButton}
                onClick={() => handleQuantity(true)}
              />
            </div>
            <CustomButton small label={t('addItem')} onClick={handleAddToCart} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Description;
