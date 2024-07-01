import { IoMoon, IoMoonOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from './styles.module.css';
import { setTheme } from '../../store/themeSlice';

function ThemeSwitcher() {
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.theme);
  console.log(theme);

  const toggleTheme = () => dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={styles.ThemeSwitcher} onClick={toggleTheme}>
      {theme === 'light' ? (IoMoonOutline) : (IoMoon)}<IoMoonOutline></IoMoonOutline>
      <p className={styles.ThemeSwitcher__text}>{theme} theme</p>
    </div>
  );
}

export default ThemeSwitcher;
