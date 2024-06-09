import Search from '../../components/Search/index.jsx';
import OptionsFilter from '../../components/OptionsFilter/index.jsx';
import styles from './styles.module.css';
import CountryList from '../../components/CountryList/index.jsx';

const HomePage = () => (
    <>
        <Search />
        <OptionsFilter />
        <CountryList />
    </>
);

export default HomePage;
