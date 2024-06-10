/* eslint-disable indent */
import React, { useState } from 'react';
import Select from 'react-select';
import styles from './styles.module.css';

const options = [{ value: 'Africa', label: 'Africa' },
{ value: 'America', label: 'America' },
{ value: 'Asia', label: 'Asia' },
{ value: 'Europe', label: 'Europe' },
{ value: 'Oceania', label: 'Oceania' }];

function OptionsFilter() {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
        <div className={styles.OptionsFilter}>
            <Select
                className={styles.OptionsFilters__select}
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                placeholder="Filter by region"
            />

        </div>
    );
}

export default OptionsFilter;
