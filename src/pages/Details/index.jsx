import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import CountryDetails from '../../components/CountryDetails/index.jsx';

function Details() {
    const navigate = useNavigate();

    return (<>
        <button onClick={() => navigate(-1)}>
            <IoArrowBack /> Back
        </button>
        <CountryDetails />

    </>
    );
}

export default Details;
