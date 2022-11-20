import React from 'react';

const BrandSelect = ({options, defaultValue, value, direction, onChange}) => {
    return (
        <select
            value={value}
            direction={direction}
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
