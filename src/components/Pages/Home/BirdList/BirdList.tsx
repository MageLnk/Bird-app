// Styles
import styles from './BirdList.module.scss';
import { CardBird } from './CardBird/CardBird';
// Types & Interfaces
import type { FC } from 'react';
import { CardBirdTypes } from '../../../../interfaces/services/CardBirdTypes';
type BirdListProps = {
  birdsInformation: {
    birds: CardBirdTypes[];
  };
};

// App
export const BirdList: FC<BirdListProps> = ({ birdsInformation }) => {
  return (
    <div className={styles.birdList}>
      <CardBird birdsInformation={birdsInformation} />
    </div>
  );
};
