import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useContext, useState } from 'react';
import { notify } from 'react-notify-toast';

import CustomButton from 'components/CustomButton';
import { commentProduct } from 'services/ProductService';
import { ProductsContext } from 'contexts/Product';
import useGATracking from 'hooks/useGATracking';
import { GAGlobalActions, GAProductActions, GoogleAnalyticsEvents } from 'interface/GoogleAnalytics';

import styles from './styles.module.scss';

type Inputs = {
  comment: string;
};

interface Props {
  id: string;
  name: string;
}

function CommentBox({ id, name }: Props) {
  const { t } = useTranslation('Product');
  const [isLoading, setIsLoading] = useState(false);
  const gaTracking = useGATracking(GoogleAnalyticsEvents.Product);
  const { refreshItem } = useContext(ProductsContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = ({ comment }) => {
    setIsLoading(true);
    commentProduct(id, comment)
      .then(() => {
        notify.show(t('commentThanks'), 'success');
        refreshItem(id);
        setValue('comment', '');
        setIsLoading(false);
        gaTracking(GAProductActions.Commented, `En ${name} comentó "${comment}"`);
      })
      .catch(() => {
        notify.show(t('commentError'), 'error');
        refreshItem(id);
        setIsLoading(false);
        gaTracking(GAGlobalActions.Issue);
      });
  };

  const printError = (type: string) => {
    switch (type) {
      case 'minLength':
        return t('minTextError');

      case 'required':
        return t('textboxError');

      case 'maxLength':
        return t('maxTextError');

      default:
        return '';
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <textarea
        placeholder={t('textboxPlaceholder')}
        maxLength={250}
        {...register('comment', {
          required: { value: true, message: '' },
          minLength: { value: 29, message: '' },
          maxLength: { value: 250, message: '' },
        })}
        className={`${styles.textArea} ${errors.comment ? styles.errorTextArea : ''}`}
      />
      <div className={styles.lowerItems}>
        <p className={styles.errorMessage}>{printError(errors.comment?.type || '')}</p>
        <CustomButton disabled={isLoading} label={t('submit')} isSubmit small className={styles.button} />
      </div>
    </form>
  );
}

export default CommentBox;
