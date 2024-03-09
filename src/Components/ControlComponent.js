import React, { useState } from 'react'; // Ensure to import useState from 'react'

// Rename the component to start with an uppercase letter
//THIS IS EXAMPLE OF CANTROLLED COMPONENTS
//WHEN WE DON'T CTREATE ANY STATE AND MAKE THINGS DEFAULT THEN THADT aare example of uncontrolled componenyt.
//we can define multiple function components and export them and use.
const ControlComponent = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
            />
            My name is {inputValue}
        </div>
    );
};

export default ControlComponent;
