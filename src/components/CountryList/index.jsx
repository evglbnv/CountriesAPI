import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCountriesData, selectAllCountries, selectVisibleCountriesbyRegion } from '../../store/countriesSlice';

import styles from './styles.module.css';
import Card from '../Card/index.jsx';
import { selectControls } from '../../store/controlsSlice';

function CountryList() {
  const dispatch = useDispatch();
  const controls = useSelector(selectControls);
  const countries = useSelector((state) => selectAllCountries(state));
  const visibleCountries = useSelector((state) => selectVisibleCountriesbyRegion(state, controls));
  console.log(visibleCountries);

  useEffect(() => {
    dispatch(fetchCountriesData());
  }, []);

  return (
    <div className={styles.countrylist__wrapper}>
      <ul className={styles.countrylist__list}>
        {visibleCountries.map((country) => (
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
