import React from 'react';

const NavItem = ({ src, alt, title, className }) => {
    return (
        <li className={className}>
            <img src={src} alt={alt} className='header__icon-item' />
            <h2 className='header__heading-item'>{title}</h2>
        </li>
    );
};

export default NavItem;