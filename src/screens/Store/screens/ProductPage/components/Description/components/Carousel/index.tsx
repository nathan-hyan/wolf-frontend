/* eslint-disable react/forbid-dom-props */
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import StaticImage from 'components/StaticImage';

import styles from './styles.module.scss';

interface Props {
  slides: string[];
}

function Carousel({ slides }: Props) {
  const [current, setCurrent] = useState(0);
  const slideLength = slides.length;

  const nextSlide = () => {
    setCurrent((prevState) => (prevState === slideLength - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setCurrent((prevState) => (prevState === 0 ? slideLength - 1 : current - 1));
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const changeToSlide = (index: number) => {
    setCurrent(index);
  };

  return (
    <>
      <section className={styles.slider}>
        {slides.length >= 2 && (
          <FontAwesomeIcon icon={faChevronLeft} className={styles.arrow} onClick={prevSlide} />
        )}
        {slides.map((slide, index) => (
          <div className={index === current ? styles.slideActive : styles.slide} key={slide}>
            {index === current && <StaticImage src={slide} className={styles.image} />}
          </div>
        ))}
        {slides.length >= 2 && (
          <FontAwesomeIcon icon={faChevronRight} className={styles.arrow} onClick={nextSlide} />
        )}
      </section>
      {slides.length >= 2 && (
        <div className={styles.miniatures}>
          {slides.map((slide, index) => (
            <StaticImage
              key={slide}
              src={slide}
              className={styles.mini}
              onClick={() => changeToSlide(index)}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Carousel;
