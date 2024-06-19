import styles from './styles.module.css';

function CountryDetails() {
  return (
    <div className={styles.countrydetails__wrapper}>
      <img className={styles.countrydetails__flag} src='/src/assets/icons/Belgium.svg'></img>
      <div className={styles.countrydetails__listgroup}>
        <b>name</b>
        <ul className={styles.countrydetails__list}>
          <li className={styles.countrydetails__list_item}><b>Native Name:</b>{ }</li>
          <li className={styles.countrydetails__list_item}><b>Population:</b> { }</li>
          <li className={styles.countrydetails__list_item}> <b>Region:</b>{ }</li>
          <li className={styles.countrydetails__list_item}><b>Capital:</b> { }</li>
          <li className={styles.countrydetails__list_item}><b>Top Level Domain:</b> { }</li>
          <li className={styles.countrydetails__list_item}><b>Currencies:</b> { }</li>
          <li className={styles.countrydetails__list_item}> <b>Languages:</b> { }</li>
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
