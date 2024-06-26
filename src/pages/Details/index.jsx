import { useParams, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCountryDetailsData, selectDetails } from '../../store/detailsSlice';
import CountryDetails from '../../components/CountryDetails/index.jsx';
import styles from './styles.module.css';

function Details() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentCountry, error, status } = useSelector(selectDetails);
  const { name } = useParams();

  useEffect(() => { dispatch(fetchCountryDetailsData(name)); }, [name, dispatch]);

  return (
    <>
      <button className={styles.button} onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </button>
      {status === 'loading' && <h2>Loading...</h2>}
      {error && <h2>{error}</h2>}
      {currentCountry && <CountryDetails navigate={navigate} name={name} {...currentCountry} />}
    </>
  );
}

export default Details;
