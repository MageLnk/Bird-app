// Hooks
import { useAppNavigate } from '../../../shared/useAppNavigate/useAppNavigate';
// Styles
import styles from './Navigation.module.scss';
// App
export const Navigation = () => {
  const { handleNavigate } = useAppNavigate();

  const handleClick = () => {
    handleNavigate('/');
  };
  return (
    <div className={styles.navigation} onClick={handleClick}>
      <p>Home</p>
    </div>
  );
};
