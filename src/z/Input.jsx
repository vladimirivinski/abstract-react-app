import React, { useState, useRef } from 'react';
import BrandInput from './components/ui/input/BrandInput';

// Компонент с двухсторонним связыванием
const Input = () => {
    const [value, setValue] = useState('Input text');

    //Управляемый input
    const [title, setTitle] = useState('');
    //Не управляемый input
    const bodyInputRef = useRef();

    const addNewPost = (e) => {
        e.preventDefault();
        //доступ к дом элементам по ссылке
        // console.log(bodyInputRef.current);
    }

    return (
        <div>
            <h1>{value}</h1>
            <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
            {/* Управляемый input */}
            <BrandInput
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Post name"
                type="text"
            />
            {/* Не управляемый input */}
            <BrandInput ref={bodyInputRef} placeholder="Post description" type="text" />
        </div>
    );
};

export default Input;
