import { useEffect, useState } from 'react';

import { Product } from 'interface/Products';

import { setPage } from './utils';
import styles from './styles.module.scss';

interface Props {
  items?: Product[];
  onChangePage: (items: Product[]) => void;
}

interface State {
  totalPages: number;
  startIndex: number;
  endIndex: number;
  currentPage: number;
  pages: number[];
  pageSize: number;
  startPage: number;
  endPage: number;
}

export default function CustomPagination({ items = [], onChangePage }: Props) {
  const [state, setState] = useState<State>({
    totalPages: 0,
    startIndex: 0,
    endIndex: 0,
    currentPage: 1,
    pages: [],
    pageSize: 0,
    startPage: 0,
    endPage: 0
  });

  const changePage = (page: number) => {
    const { totalPages } = state;
    const pager = setPage(items, page);

    if (page < 1 || page > totalPages) {
      return;
    }

    setState(pager.newState);
    onChangePage(pager.items);
  };

  useEffect(() => {
    const pager = setPage(items);
    setState(pager.newState);
    onChangePage(pager.items);
  }, [items, onChangePage]);

  return (
    <div className={styles.container}>
      <div className={styles.pagination}>
        <button disabled={state.currentPage === 1} type="button" onClick={() => changePage(1)}>
          {'<<'}
        </button>
        <p>|</p>
        <button
          disabled={state.currentPage === 1}
          type="button"
          onClick={() => changePage(state.currentPage - 1)}
        >
          {'<'}
        </button>
        <p>|</p>
        {state.pages.map((page) => (
          <button
            key={Math.random()}
            className={state.currentPage === page ? styles.active : ''}
            type="button"
            onClick={() => changePage(page)}
          >
            {page}
          </button>
        ))}
        <p>|</p>
        <button
          disabled={state.currentPage === state.totalPages}
          type="button"
          onClick={() => changePage(state.currentPage + 1)}
        >
          {'>'}
        </button>
        <p>|</p>
        <button
          disabled={state.currentPage === state.totalPages}
          type="button"
          onClick={() => changePage(state.totalPages)}
        >
          {'>>'}
        </button>
      </div>
    </div>
  );
}
