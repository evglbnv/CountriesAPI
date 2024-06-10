import { Link } from 'react-router-dom';
import styles from './styles.module.css';
import ThemeSwitcher from '../ThemeSwitcher/index.jsx';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link
          className={styles.header__link}
          to="/"
          aria-label="Ссылка на главную страницу"
        >
          Where in the world?
        </Link>
      </div>
      <ThemeSwitcher />
    </header>
  );
}

export default Header;
