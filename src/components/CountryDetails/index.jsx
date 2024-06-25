/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import styles from './styles.module.css';

function CountryDetails(
  props,
) {
  const {
    capital, region, name, population, tld, currencies, languages, subregion, flags, flag,
  } = props;

  console.log(Object.values(name).map((nn) => Object.values(nn)));

  return (
    <div className={styles.countrydetails__wrapper}>
      <img className={styles.countrydetails__flag} src={flags.png}></img>
      <div className={styles.countrydetails__listgroup}>
        <b>{name.common}</b>
        <ul className={styles.countrydetails__list}>
          <li className={styles.countrydetails__list_item}><b>Native Name:</b>{name.common}</li>
          <li className={styles.countrydetails__list_item}><b>Population:</b> {population}</li>
          <li className={styles.countrydetails__list_item}> <b>Region: </b>{subregion}</li>
          <li className={styles.countrydetails__list_item}><b>Capital:</b> {capital}</li>
          <li className={styles.countrydetails__list_item}><b>Top Level Domain:</b>{tld}</li>
          <li className={styles.countrydetails__list_item}><b>Currencies:</b>
            {`${Object.values(currencies).map((currency) => currency.name)} 
           ${Object.values(currencies).map((currency) => currency.symbol)} `}</li>
          <li className={styles.countrydetails__list_item}> <b>Languages:</b>
            {Object.values(languages).map((language) => language).join(' ')}</li>
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
    </div >
  );
}

export default CountryDetails;
