/* eslint-disable indent */
import { IoIosSearch } from 'react-icons/io';
import styles from './styles.module.css';

function Search() {
    return (<div className={styles.search}>
        <form className={styles.search__container}>
            <IoIosSearch />
            <input
                className={styles.search__input}
                placeholder='Search for a country...'
            />
        </form>

    </div>);
}

export default Search;
