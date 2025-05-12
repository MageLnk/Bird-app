// Styles
import styles from './BirdList.module.scss';
import { CardBird } from './CardBird/CardBird';
// Utils
import { birdsInformation } from '../../../shared/stubs/birdInformation';
// App
export const BirdList = () => {
  if (!birdsInformation) return null;

  return (
    <div className={styles.birdList}>
      <CardBird birdsInformation={birdsInformation} />
    </div>
  );
};
