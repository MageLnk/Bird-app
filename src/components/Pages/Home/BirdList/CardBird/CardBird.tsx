// Hooks
import { useAppNavigate } from '../../../../shared/useAppNavigate/useAppNavigate';
// Styles
import styles from './CardBird.module.scss';
// Types & Interfaces
import type { FC } from 'react';
import { CardBirdTypes } from '../../../../../interfaces/services/CardBirdTypes';
type CardBirdProps = {
  birdsInformation: {
    birds: CardBirdTypes[];
  };
};

// App
export const CardBird: FC<CardBirdProps> = ({ birdsInformation }) => {
  const { handleNavigate } = useAppNavigate();

  const { birds } = birdsInformation;

  const handleClick = (birdId: string) => {
    handleNavigate(`/bird/${birdId}`);
  };

  return (
    <>
      {birds.map((bird) => (
        <div key={bird.id} className={styles.cardBird} onClick={() => handleClick(bird.id)}>
          <img src={bird.thumb_url} alt={bird.english_name} />
          <div className={styles.cardBird__birdInfo}>
            <h3>{bird.english_name}</h3>
            <p>{bird.latin_name}</p>
          </div>
        </div>
      ))}
    </>
  );
};
