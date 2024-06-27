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
    capital, name, population, tld, currencies, languages, subregion, flags, borders = [], navigate,
  } = props;

  const neighbors = useSelector(selectNeighbors);
  const dispatch = useDispatch();

  useEffect(() => {
    if (borders.length) {
      dispatch(fetchBorderDetails(borders));
    }
  }, [borders, dispatch]);

  return (
    <section className={styles.countrydetails__section}>
      <img className={styles.countrydetails__flag} src={flags.svg}></img>
      <div>
        <div className={styles.countrydetails__name}>{name.common}</div>
        <div className={styles.countrydetails__listgroup}>
          <ul className={styles.countrydetails__list}>
            <li className={styles.countrydetails__list_item}><span>Native Name:</span>
              {Object.values(name.nativeName).map((nn) => nn.official).slice(0, 1)}
            </li>
            <li className={styles.countrydetails__list_item}><span>Population:</span> {population.toLocaleString()}</li>
            <li className={styles.countrydetails__list_item}> <span>Region: </span>{subregion}</li>
            <li className={styles.countrydetails__list_item}><span>Capital:</span> {capital}</li>
            <li className={styles.countrydetails__list_item}><span>Top Level Domain:</span>{tld}</li>
            <li className={styles.countrydetails__list_item}><span>Currencies:</span>
              {`${Object.values(currencies).map((currency) => currency.name)} 
           ${Object.values(currencies).map((currency) => currency.symbol)} `}
            </li>
            <li className={styles.countrydetails__list_item}> <b>Languages:</b>
              {Object.values(languages).map((language) => language).join(' ')}
            </li>
          </ul>
        </div>
        <div>
          <b className={styles.countrydetails__name}>Border Countries</b> {!borders.length ? (<span>There is no borders here</span>)
            : (
              <ul className={styles.countrydetails__borderlist}>{neighbors.map((country) => (
                <li className={styles.countrydetails__borderlist_item} key={country}
                  onClick={() => navigate(`/country/${country}`)}>{country}
                </li>
              ))}
              </ul>)}
        </div>
      </div>
    </section >
  );
}

export default CountryDetails;
