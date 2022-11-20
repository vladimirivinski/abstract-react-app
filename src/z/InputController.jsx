import React from 'react';
import cl from './BrandInput.module.css';

const InputController = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={cl.brand} {...props}/>
    );
});

export default InputController;
