/* eslint-disable indent */
import styles from './styles.module.css';

function OptionsFilter() {
    const optionsMap = {
        Africa: { value: 'Africa', label: 'Africa' },
        America: { value: 'America', label: 'America' },
        Asia: { value: 'Asia', label: 'Asia' },
        Europe: { value: 'Europe', label: 'Europe' },
        Oceania: { value: 'Oceania', label: 'Oceania' },
    };

    return (
        <label>
            Filter by region
            <select name="Filter by Region">
                <option value="Africa">Africa</option>
                <option value="America">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </label>
    );
}

export default OptionsFilter;
