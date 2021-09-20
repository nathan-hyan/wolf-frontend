import { TIME_OPTIONS } from './constants';
import styles from './styles.module.scss';

interface Props {
  timestamp: string;
  body: string;
}

const getTimeStamp = (timestamp: string) => {
  try {
    return new Intl.DateTimeFormat(navigator.language, TIME_OPTIONS).format(new Date(timestamp));
  } catch {
    return '-';
  }
};

function CommentItem({ timestamp, body }: Props) {
  return (
    <div className={styles.container}>
      <p className={styles.body}>{body}</p>
      <p className={styles.timestamp}>{getTimeStamp(timestamp)}</p>
      <div className={styles.separator} />
    </div>
  );
}

export default CommentItem;
