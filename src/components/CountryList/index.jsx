/* eslint-disable max-len */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  fetchCountriesData, selectVisibleCountriesbyRegion,
} from '../../store/countriesSlice';

import styles from './styles.module.css';
import Card from '../Card/index.jsx';
import { selectControls } from '../../store/controlsSlice';

function CountryList() {
  const dispatch = useDispatch();
  const controls = useSelector(selectControls);
  console.log(controls);
  const visibleCountries = useSelector((state) => selectVisibleCountriesbyRegion(state, controls));

  useEffect(() => {
    dispatch(fetchCountriesData());
  }, [dispatch]);

  return (
    <div className={styles.countrylist__wrapper}>
      <ul className={styles.countrylist__list}>
        {visibleCountries.map((country) => (
          <Card
            key={country.name.common}
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
