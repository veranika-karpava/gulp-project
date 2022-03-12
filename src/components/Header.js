import React, { Component } from 'react';
import logo from '../assets/images/logo.png';
import NavItem from './NavItem';
import pie from '../assets/icons/pie-chart1.svg';
import clock from '../assets/icons/time-clock.svg';
import pencil from '../assets/icons/pencil.svg';
import file from '../assets/icons/file.svg';
import check from '../assets/icons/check-mark.svg';
import envelope from '../assets/icons/envelope.svg';
import statistics from '../assets/icons/statistics.svg';
import avatar from '../assets/images/avatar.png';

class Header extends Component {
    render() {
        return (
            <header className='header'>
                <div className='header__container-logo'>
                    <img src={logo} alt='Employee time Reporting' className='header__logo' />
                </div>
                <nav className='header__navigation'>
                    <ul className='header__list'>
                        <NavItem src={pie} alt='Pie-chart icon' title='Summary' className='header__item-list' />
                        <NavItem src={clock} alt='Time-clock icon' title='Hours' className='header__item-list' />
                        <NavItem src={pencil} alt='Pencil icon' title='Projects' className='header__item-list header__item-list-active' />
                        <NavItem src={file} alt='File icon' title='Time reports' className='header__item-list' />
                        <NavItem src={check} alt='Check marker icon' title='Confirmation' className='header__item-list' />
                        <NavItem src={envelope} alt='Envelope icon' title='Mailer' className='header__item-list' />
                        <NavItem src={statistics} alt='Statistics icon' title='Compare' className='header__item-list' />
                    </ul>
                </nav>
                <div className='header__container-avatar'>
                    <img src={avatar} alt='Avatar icon' className='header__avatar' />
                </div>
            </header>
        );
    }
}

export default Header;

