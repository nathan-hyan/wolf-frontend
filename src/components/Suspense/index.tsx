import { ReactNode, Suspense as ReactSuspense } from 'react';

import LoadingSpinner from 'components/LoadingSpinner';

import styles from './styles.module.scss';

interface Props {
  fallback?: ReactNode;
  children: ReactNode;
}

function Suspense({ fallback, children }: Props) {
  return (
    <ReactSuspense
      fallback={
        fallback || (
          <div className={styles.loading}>
            <LoadingSpinner />
          </div>
        )
      }
    >
      {children}
    </ReactSuspense>
  );
}

export default Suspense;
