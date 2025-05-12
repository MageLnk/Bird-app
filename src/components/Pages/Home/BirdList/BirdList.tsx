// Styles
import styles from './BirdList.module.scss';
import { CardBird } from './CardBird/CardBird';
// App
export const BirdList = () => {
  const birdsInformation = [
    {
      id: 1,
      english_name: 'Bird 1',
      latin_name: 'Pájaro 1',
      thumb_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpj2x243KrWVWva2X1nMdHaswcQjCsAj36A&s'
    },
    {
      id: 2,
      english_name: 'Bird 2',
      latin_name: 'Pájaro 2',
      thumb_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpj2x243KrWVWva2X1nMdHaswcQjCsAj36A&s'
    },
    {
      id: 3,
      english_name: 'Bird 3',
      latin_name: 'Pájaro 3',
      thumb_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpj2x243KrWVWva2X1nMdHaswcQjCsAj36A&s'
    },
    {
      id: 4,
      english_name: 'Bird 4',
      latin_name: 'Pájaro 4',
      thumb_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLpj2x243KrWVWva2X1nMdHaswcQjCsAj36A&s'
    }
  ];

  if (!birdsInformation) return null;

  return (
    <div className={styles.birdList}>
      <CardBird birdsInformation={birdsInformation} />
    </div>
  );
};
