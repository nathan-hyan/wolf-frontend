import { Rating } from 'interface/Products';

import Progressbar from './components/Progressbar';
import styles from './styles.module.scss';

interface Props {
  rating: Rating;
}

function Breakdown({ rating }: Props) {
  return (
    <div className={styles.container}>
      <Progressbar star={1} completed={rating.oneStar} total={rating.usersRating} />
      <Progressbar star={2} completed={rating.twoStar} total={rating.usersRating} />
      <Progressbar star={3} completed={rating.threeStar} total={rating.usersRating} />
      <Progressbar star={4} completed={rating.fourStar} total={rating.usersRating} />
      <Progressbar star={5} completed={rating.fiveStar} total={rating.usersRating} />
    </div>
  );
}

export default Breakdown;
