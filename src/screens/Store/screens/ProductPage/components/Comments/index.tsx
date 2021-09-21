import { useTranslation } from 'react-i18next';

import { Product } from 'interface/Products';

import CommentItem from './components/CommentItem';
import styles from './styles.module.scss';
import CommentBox from './components/CommentBox';

interface Props {
  product: Product;
}

function Comments({ product: { comments, _id, name } }: Props) {
  const { t } = useTranslation('Product');

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {t('leaveYourComment')}
        :
      </h1>
      <CommentBox id={_id!} name={name} />
      {comments.length && (
        <>
          <h1 className={styles.title}>
            {t('comments')}
            :
          </h1>
          {comments.map((comment) => (
            <CommentItem timestamp={comment.timestamp} body={comment.body} key={comment._id} />
          ))}
        </>
      )}
    </div>
  );
}

export default Comments;
