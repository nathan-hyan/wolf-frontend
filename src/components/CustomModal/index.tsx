import CustomButton from 'components/CustomButton';

import styles from './styles.module.scss';

interface Props {
  title: string;
  body: string;
  show: boolean;
  acceptButtonText: string;
  cancelButtonText: string;
  acceptButtonOnClick: () => void;
  cancelButtonOnClick: () => void;
  close?: () => void;
}
function CustomModal({
  title,
  body,
  show,
  acceptButtonText,
  cancelButtonText,
  acceptButtonOnClick,
  cancelButtonOnClick,
  close
}: Props) {
  return show ? (
    <div className={styles.container} onClick={close}>
      <div className={styles.innerContainer}>
        <div className={styles.title}>
          <h1>{title}</h1>
          <p className={styles.close}>x</p>
        </div>
        <div className={styles.body}>
          <p>{body}</p>
        </div>
        <div className={styles.buttons}>
          <CustomButton label={acceptButtonText} onClick={acceptButtonOnClick} small />
          <CustomButton label={cancelButtonText} onClick={cancelButtonOnClick} small secondary />
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default CustomModal;
