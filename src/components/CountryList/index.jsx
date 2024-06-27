/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  fetchCountriesData, selectVisibleCountriesbyRegion,
  selectCountriesInfo,
} from '../../store/countriesSlice';

import styles from './styles.module.css';
import Card from '../Card/index.jsx';
import { selectControls } from '../../store/controlsSlice';

function CountryList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const controls = useSelector(selectControls);
  const visibleCountries = useSelector((state) => selectVisibleCountriesbyRegion(state, controls));

  const { error, status } = useSelector(selectCountriesInfo);

  useEffect(() => {
    dispatch(fetchCountriesData());
  }, [dispatch]);

  return (
    <section className={styles.countrylist__section}>
      {error && <h2>Can't fetch data</h2>}
      {status === 'loading' && <h2>Loading...</h2>}
      {status === 'received' && (<ul className={styles.countrylist__list}>
        {visibleCountries.map((country) => (
          <Card
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.png}
            population={country.population}
            region={country.region}
            capital={country.capital}
            onClick={() => {
              navigate(`/country/${country.name.common}`);
            }}
          />
        ))}
      </ul>)}
    </section>
  );
}

export default CountryList;
