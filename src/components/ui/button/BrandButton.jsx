import React from 'react';
import classes from './BrandButton.module.css';

function BrandButton({children, ...props}) {
    return (
        <button {...props} className={classes.btn}>
            {children}
        </button>
    );
}
export default BrandButton;
