import { useTranslation } from 'react-i18next';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useContext } from 'react';

import CustomButton from 'components/CustomButton';
import FormInput from 'components/FormInput';
import { CartContext } from 'contexts/Cart';
import { Info } from 'interface/Purchase';

import styles from './styles.module.scss';
import PurchaseList from './components/PurchaseList';
import { INPUTS } from './constants';
import NoItems from './components/NoItems';

function Cart() {
  const { productList, checkout } = useContext(CartContext);
  const { handleSubmit, control } = useForm();
  const { t } = useTranslation('Cart');
  const requiredItem = <p className={styles.required}>*</p>;
  const onSubmit: SubmitHandler<Info> = (info) => {
    checkout(info);
  };

  const NUMBER_VALIDATION = { min: 999999999, max: 9999999999999 };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.container}>
        <main className={styles.mainContainer}>
          <h1 className={styles.title}>{t('clientInfo')}</h1>
          <p className={styles.subTitle}>{t('clientInfoSubtext')}</p>
          <div className={styles.form}>
            {INPUTS.map((input) => (
              <>
                <Controller
                  key={input.id}
                  defaultValue=""
                  control={control}
                  name={input.name}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <>
                      <FormInput
                        {...field}
                        {...(input.name === 'whatsApp' ? NUMBER_VALIDATION : undefined)}
                        name={input.name}
                        inputType={input.type}
                        label={`${t(input.name)}:`}
                        placeholder={input.placeholder}
                        labelClassName={styles.formLabel}
                        required
                      />
                      {input.name === 'whatsApp' && (
                        <p>
                          El número de teléfono debe tener el siguiente formato:
                          cod. país + cod. de area + numero sin 15 (ej. 54116176278)
                        </p>
                      )}
                    </>
                  )}
                />
              </>
            ))}
          </div>
          <p className={styles.subTitle}>
            {t('wontShare')}
            {requiredItem}
          </p>
          <p className={styles.wePromise}>{t('wePromise')}</p>
        </main>
        <aside className={styles.totalCart}>
          {productList.length ? (
            <>
              <div>
                <h1 className={styles.totalTitle}>{t('cartTitle')}</h1>
                <PurchaseList className={styles.list} items={productList} />
              </div>
              <CustomButton label={t('finishPurchasing')} isSubmit />
            </>
          ) : (
            <NoItems />
          )}
        </aside>
      </div>
    </form>
  );
}

export default Cart;
