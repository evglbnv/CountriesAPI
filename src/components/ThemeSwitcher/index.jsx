import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import styles from './styles.module.css';

function ThemeSwitcher() {
  return (
    <div className={styles.ThemeSwitcher}>
      <IoMoonOutline></IoMoonOutline>
      <p className={styles.ThemeSwitcher__text}>Dark Mode</p>
    </div>
  );
}

export default ThemeSwitcher;
