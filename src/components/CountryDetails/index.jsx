/* eslint-disable max-len */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import styles from './styles.module.css';
import { selectNeighbors, fetchBorderDetails } from '../../store/detailsSlice';

function CountryDetails(
  props,
) {
  const {
    capital, name, population, tld, currencies, languages, subregion, flags, borders,
  } = props;

  const neighbors = useSelector(selectNeighbors);
  const dispatch = useDispatch();

  useEffect(() => {
    if (borders.length) {
      dispatch(fetchBorderDetails(borders));
    }
  }, [borders, dispatch]);

  return (
    <div className={styles.countrydetails__wrapper}>
      <img className={styles.countrydetails__flag} src={flags.png}></img>
      <div className={styles.countrydetails__listgroup}>
        <b>{name.common}</b>
        <ul className={styles.countrydetails__list}>
          <li className={styles.countrydetails__list_item}><b>Native Name:</b>
            {Object.values(name.nativeName).map((nn) => nn.official).slice(0, 1)}
          </li>
          <li className={styles.countrydetails__list_item}><b>Population:</b> {population.toLocaleString()}</li>
          <li className={styles.countrydetails__list_item}> <b>Region: </b>{subregion}</li>
          <li className={styles.countrydetails__list_item}><b>Capital:</b> {capital}</li>
          <li className={styles.countrydetails__list_item}><b>Top Level Domain:</b>{tld}</li>
          <li className={styles.countrydetails__list_item}><b>Currencies:</b>
            {`${Object.values(currencies).map((currency) => currency.name)} 
           ${Object.values(currencies).map((currency) => currency.symbol)} `}
          </li>
          <li className={styles.countrydetails__list_item}> <b>Languages:</b>
            {Object.values(languages).map((language) => language).join(' ')}
          </li>
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
