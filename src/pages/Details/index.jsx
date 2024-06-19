import { useParams, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import CountryDetails from '../../components/CountryDetails/index.jsx';

function Details() {
  const navigate = useNavigate();

  const { name } = useParams();

  return (
    <>
      <button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </button>
      <CountryDetails name={name} />
    </>
  );
}

export default Details;
