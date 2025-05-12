import { useParams } from 'react-router-dom';
// Components
import { Title } from './Title/Title';
// Hooks
import { useAppNavigate } from '../../../shared/useAppNavigate/useAppNavigate';
// Utils
import { birdsInformation } from '../../../shared/stubs/birdInformation';
// Styles
import styles from './TitleContainer.module.scss';
// App
export const TitleContainer = () => {
  const { id } = useParams();
  const { handleNavigate } = useAppNavigate();

  if (!birdsInformation) return null;

  if (!id) {
    handleNavigate('/');
    return null;
  }

  return (
    <div className={styles.titleContainer}>
      <Title birdsInformation={birdsInformation} id={id} />
      <button>Add note</button>
    </div>
  );
};
