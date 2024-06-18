/* eslint-disable indent */
import { IoIosSearch } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import styles from './styles.module.css';
import OptionsFilter from '../OptionsFilter/index.jsx';
import { selectSearch, setSearch } from '../../store/controlsSlice';

function Search() {
    const dispatch = useDispatch();
    const search = useSelector(selectSearch);

    const handleSearch = (e) => {
        e.preventDefault();
        dispatch(setSearch(e.target.value));
    };

    return (
        <div className={styles.search__wrapper}>
            <form className={styles.search}>
                <IoIosSearch className={styles.search__icon} />
                <input
                    className={styles.search__input}
                    placeholder='Search for a country...'
                    type="search"
                    onChange={handleSearch}
                    value={search}
                />
            </form>
            <OptionsFilter />
        </div>
    );
}

export default Search;
