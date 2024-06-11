import styles from './styles.module.css';

function CountryDetails() {
  return (
    <div className={styles.countrydetails__wrapper}>
      <img className={styles.countrydetails__flag} src='/src/assets/icons/Belgium.svg'></img>
      <div className={styles.countrydetails__listgroup}>
        <b>Belgium</b>
        <ul className={styles.countrydetails__list}>
          <li className={styles.countrydetails__list_item}>Native Name: België</li>
          <li className={styles.countrydetails__list_item}>Population: 11.319.511</li>
          <li className={styles.countrydetails__list_item}>Region: Europe</li>
          <li className={styles.countrydetails__list_item}>Capital: Western Europe</li>
          <li className={styles.countrydetails__list_item}>Top Level Domain: Western Europe</li>
          <li className={styles.countrydetails__list_item}>Currencies: Euro</li>
          <li className={styles.countrydetails__list_item}>Languages: Dutch,French,German</li>
        </ul>
        <div>
          <b className={styles.countrydetails__borderlist_header}>Border Countries</b>
          <ul className={styles.countrydetails__borderlist}>
            <li className={styles.countrydetails__borderlist_item}>France</li>
            <li className={styles.countrydetails__borderlist_item}>Germany</li>
            <li className={styles.countrydetails__borderlist_item}>Netherlands</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
