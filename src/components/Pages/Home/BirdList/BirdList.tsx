// Styles
import styles from './BirdList.module.scss';
import { CardBird } from './CardBird/CardBird';
// Types & Interfaces
import type { FC } from 'react';
type BirdListProps = {
  birdsInformation: {
    birds: CardBirdTypes[];
  };
};
type CardBirdTypes = {
  id: string;
  english_name: string;
  latin_name: string;
  thumb_url: string;
};
// App
export const BirdList: FC<BirdListProps> = ({ birdsInformation }) => {
  return (
    <div className={styles.birdList}>
      <CardBird birdsInformation={birdsInformation} />
    </div>
  );
};
