import styles from './styles.module.scss';

interface Props {
  name: string;
  isSelected: boolean;
  onClick: () => void;
}

function Item({ name, onClick, isSelected }: Props) {
  return (
    <p onClick={onClick} className={`${styles.text} ${isSelected ? styles.selected : styles.notSelected}`}>
      {name}
    </p>
  );
}

export default Item;
