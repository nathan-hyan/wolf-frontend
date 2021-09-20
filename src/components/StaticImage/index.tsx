/* eslint-disable react/forbid-dom-props */
import styles from './styles.module.scss';

interface Props {
  src: string;
  width?: string;
  height?: string;
  rounded?: boolean;
  className?: string;
  onClick?: () => void;
}

function Image({
  src, width, height, rounded, className, onClick,
}: Props) {
  const customStyles = { backgroundImage: `url(${src})`, width: width ?? '', height: height ?? '' };

  return (
    <div
      onClick={onClick}
      style={customStyles}
      className={`${styles.image} ${rounded ? styles.rounded : ''} ${className || ''}`}
      role="img"
    />
  );
}

export default Image;
