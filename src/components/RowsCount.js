import React, { useState } from 'react';
import { back } from '../assets/icons/chevron-down.svg';
import { next } from '../assets/icons/chevron-down1.svg';

const counterRows = ['10', '20']

const RowsCount = ({ totalRows }) => {
    const [isCountedRows, setIsCountedRows] = useState('10');

    const handleChangeRows = (e) => {
        setIsCountedRows(e.target.value);
    }

    const renderRowsPage = () => {
        return (
            <p className='results__total-rows'>{`${Math.floor(totalRows / isCountedRows)} -${isCountedRows} of ${totalRows}`}</p>
        )
    }

    return (
        <div className='results__rows-count-container'>
            <form className='results__rows-count-form'>
                <label className='results__title'>Rows per page</label>
                <select id="count-rows" name="count-rows" className='results__selection-form' onChange={handleChangeRows} value={isCountedRows}>
                    {counterRows.map((row, i) => {
                        return <option value={row} key={i} className='results__option-count-rows'>{row}</option>
                    })}
                </select>
                {renderRowsPage()}
            </form>
            <div className='results__page-counter'>
                <img className='results__back-arrow' src={back} alt='back-icon' />
                <p className='results__page results__page-active'>1</p>
                <p className='results__page'>2</p>
                <img className='results__next-arrow' src={next} alt='next-icon' />
            </div>




        </div>
    );
};

export default RowsCount;