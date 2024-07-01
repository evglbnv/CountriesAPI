import { IoMoonOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import { setTheme } from '../../store/themeSlice';

function ThemeSwitcher() {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme);

  const toggleTheme = () => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));

  return (
    <div className={styles.ThemeSwitcher}>
      <IoMoonOutline></IoMoonOutline>
      <p className={styles.ThemeSwitcher__text}>Dark Mode</p>
    </div>
  );
}

export default ThemeSwitcher;
