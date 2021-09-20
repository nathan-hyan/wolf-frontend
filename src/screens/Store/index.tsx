import { useCallback, useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { ProductsContext } from 'contexts/Product';
import LoadingSpinner from 'components/LoadingSpinner';
import CustomCard from 'screens/Store/components/CustomCard';
import Pagination from 'components/Pagination';
import { Product } from 'interface/Products';

import styles from './styles.module.scss';
import SortingItems from './components/SortingItems';
import Banner from './components/Banner';

function Store() {
  const { t } = useTranslation('Store');
  const { isLoading, products } = useContext(ProductsContext);
  const [productList, setProductList] = useState<Product[]>([]);

  const onPageChange = useCallback((items: Product[]) => {
    setProductList(items);
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? (
        <LoadingSpinner loadingText={t('loading')} />
      ) : (
        <>
          <Banner />
          <div className={styles.mainContent}>
            <SortingItems />
            {products.length ? (
              <>
                <div className={styles.productContainer}>
                  {productList.map((product) => (
                    <CustomCard {...product} key={product._id} />
                  ))}
                </div>
                <Pagination items={products} onChangePage={onPageChange} />
              </>
            ) : (
              <div className={styles.noItems}>
                <h1 className={styles.noItemsTitle}>{t('noItemsTitle')}</h1>
                <p className={styles.noItemsText}>{t('noItemsText')}</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Store;
