/* eslint-disable react/forbid-dom-props */
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { calculatePercentage } from 'utils/randomNumber';

import styles from './styles.module.scss';

interface Props {
  completed: number;
  total: number;
  star: number;
}

function Progressbar({ star, completed, total }: Props) {
  return (
    <div className={styles.container}>
      <p className={styles.starCount}>
        {star}
        {' '}
        <FontAwesomeIcon icon={faStar} className={styles.star} />
      </p>

      <div className={styles.barContainer}>
        <div className={styles.filler} style={{ width: `${calculatePercentage(completed, total)}%` }} />
      </div>
      <p>
        (
        {completed}
        )
      </p>
    </div>
  );
}

export default Progressbar;
