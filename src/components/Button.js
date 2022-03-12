import React from 'react';

const Button = ({ handleSubmit, title, className }) => {
    return (
        <button className={className} onClick={handleSubmit}>{title}</button>
    );
};

export default Button;