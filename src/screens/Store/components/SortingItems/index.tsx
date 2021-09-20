import { useContext, useState } from 'react';

import { ProductsContext } from 'contexts/Product';
import { SortingType } from 'contexts/Product/constants';

import Item from './components/Item';
import { SORT_TYPE } from './constants';
import styles from './styles.module.scss';

function SortingItems() {
  const [currentSelected, setCurrentSelected] = useState(SortingType.All);
  const { handleSortProducts: sortProducts } = useContext(ProductsContext);

  const handleSelect = (id: number) => {
    setCurrentSelected(id);
    sortProducts(id);
  };

  return (
    <div className={styles.container}>
      {SORT_TYPE.map((sort, index) => (
        <div key={sort.id}>
          <Item
            onClick={() => handleSelect(sort.id)}
            name={sort.name}
            isSelected={currentSelected === sort.id}
          />
          {' '}
          {index !== SORT_TYPE.length - 1 && <span className={styles.separator}>|</span>}
        </div>
      ))}
    </div>
  );
}

export default SortingItems;
