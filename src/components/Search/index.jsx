/* eslint-disable indent */
import { IoIosSearch } from 'react-icons/io';
import styles from './styles.module.css';
import OptionsFilter from '../OptionsFilter/index.jsx';

function Search() {
    return (
        <div className={styles.search__wrapper}>
            <form className={styles.search}>
                <IoIosSearch className={styles.search__icon} />
                <input
                    className={styles.search__input}
                    placeholder='Search for a country...'
                />
            </form>
            <OptionsFilter />
        </div>
    );
}

export default Search;
