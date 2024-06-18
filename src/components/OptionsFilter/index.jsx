/* eslint-disable indent */
import Select from 'react-select';
import { useDispatch } from 'react-redux';
import styles from './styles.module.css';
import { setRegion } from '../../store/controlsSlice';

const options = [{ value: 'Africa', label: 'Africa' },
{ value: 'America', label: 'America' },
{ value: 'Asia', label: 'Asia' },
{ value: 'Europe', label: 'Europe' },
{ value: 'Oceania', label: 'Oceania' }];

function OptionsFilter() {
    const dispatch = useDispatch();

    const handleSelect = (reg) => {
        dispatch(setRegion(reg?.value || ''));
    };

    return (
        <div className={styles.OptionsFilter}>
            <Select
                className={styles.OptionsFilters__select}
                onChange={handleSelect}
                options={options}
                isClearable
                placeholder="Filter by region"
            />

        </div>
    );
}

export default OptionsFilter;
