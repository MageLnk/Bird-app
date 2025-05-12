// Hooks
import { useAppNavigate } from '../../../../shared/useAppNavigate/useAppNavigate';
// Styles
import styles from './Title.module.scss';
// Types & Interfaces
import type { FC } from 'react';
type TitleProps = {
  birdsInformation: CardBirdTypes[];
  id: string;
};
type CardBirdTypes = {
  id: string;
  english_name: string;
  latin_name: string;
  thumb_url: string;
};
// App
export const Title: FC<TitleProps> = ({ birdsInformation, id }) => {
  const { handleNavigate } = useAppNavigate();

  const bird = birdsInformation.find((bird) => bird.id === id) || null;

  if (!bird) {
    handleNavigate('/');
    return null;
  }

  return (
    <div className={styles.title}>
      <h1>
        <span>Birds /</span> {bird.english_name}
      </h1>
    </div>
  );
};
