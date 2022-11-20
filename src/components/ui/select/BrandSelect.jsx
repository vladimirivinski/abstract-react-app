import React from 'react';
import cl from './BrandSelect.module.css';


const BrandSelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select
            className={cl.brand}
            value={value}
            onChange={ event => onChange(event.target.value) }
        >
            <option value="" disabled selected hidden>{defaultValue}</option>
            {options.map( (option, index) => 
                <option key={index} value={option.value} >
                    {option.name}
                </option>
            )}
        </select>
    );
}

export default BrandSelect;
