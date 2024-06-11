import styles from './styles.module.css';
import Card from '../Card/index.jsx';

function CountryList() {
  return (
    <div className={styles.countrylist__wrapper}>
      <ul className={styles.countrylist__list}>
        <li className={styles.countrylist__list_item}><Card /></li>
        <li className={styles.countrylist__list_item}><Card /></li>
        <li className={styles.countrylist__list_item}><Card /></li>
        <li className={styles.countrylist__list_item}><Card /></li>
        <li className={styles.countrylist__list_item}><Card /></li>
        <li className={styles.countrylist__list_item}><Card /></li>
      </ul>
    </div>
  );
}

export default CountryList;
