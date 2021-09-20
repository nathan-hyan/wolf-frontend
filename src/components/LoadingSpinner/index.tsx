import styles from './styles.module.scss';

interface Props {
  loadingText?: string;
}

function LoadingSpinner({ loadingText = 'Cargando datos' }: Props) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.spinnerContainer}>
          <div>
            <div className={styles.spinner} />
            <p className={styles.rclogoCenter} />
          </div>
          <h1>
            {loadingText}
            ...
          </h1>
        </div>
      </div>
      <div className={styles.backdrop} />
    </>
  );
}

export default LoadingSpinner;
