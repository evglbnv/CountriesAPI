import styles from './styles.module.css';
import Card from '../Card/index.jsx';

function CountryList() {
  return (
    <div className={styles.countryList__wrapper}>
      <ul className={styles.countryList__list}>
        <li><Card /></li>
        <li><Card /></li>
        <li><Card /></li>
        <li><Card /></li>
        <li><Card /></li>
        <li><Card /></li>
      </ul>
    </div>
  );
}

export default CountryList;
