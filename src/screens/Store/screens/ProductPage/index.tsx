import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { ProductsContext } from 'contexts/Product';
import LoadingSpinner from 'components/LoadingSpinner';

import styles from './styles.module.scss';
import Description from './components/Description';
import Comments from './components/Comments';
import Rating from './components/Rating';

function ProductPage() {
  const { id } = useParams<any>();
  const { gatherSingleProduct, singleProduct, isLoading } = useContext(ProductsContext);
  useEffect(() => {
    window.scrollTo(0, 0);
    gatherSingleProduct(id);
  }, [gatherSingleProduct, id]);

  return (
    <div className={styles.container}>
      {isLoading && <LoadingSpinner />}
      <Description product={singleProduct} />
      <div className={styles.interactivity}>
        <Comments product={singleProduct} />
        <Rating product={singleProduct} />
      </div>
    </div>
  );
}

export default ProductPage;
