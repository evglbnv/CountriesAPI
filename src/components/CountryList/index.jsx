import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCountriesData, selectAllCountries } from '../../store/countriesSlice';

import styles from './styles.module.css';
import Card from '../Card/index.jsx';

function CountryList() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => selectAllCountries(state));
  console.log(countries);
  useEffect(() => {
    dispatch(fetchCountriesData());
  }, [dispatch]);

  return (
    <div className={styles.countrylist__wrapper}>
      <ul className={styles.countrylist__list}>
        {countries.map((country) => (
          <Card
            key={country.name}
            name={country.name.common}
            flag={country.flags.png}
            population={country.population}
            region={country.region}
            capital={country.capital}
          />
        ))}
      </ul>
    </div>
  );
}

export default CountryList;
