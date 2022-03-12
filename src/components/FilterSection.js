import React, { useState } from 'react';
import Button from './Button';


const FilterSection = ({ data, status }) => {
    const [isSelectedDev, setIsSelectedDev] = useState(data[0].devName);
    const [isSelectedStatus, setIsSelectedStatus] = useState('All Status');
    const [isChecked, setIsChecked] = useState(false);

    const handleChangeSelectionDev = (e) => {
        setIsSelectedDev(e.target.value);
    }

    const handleChangeSelectionStatus = (e) => {
        setIsSelectedStatus(e.target.value);
    }

    const handleChangeChecked = () => {
        setIsChecked(!isChecked);
    }

    const handleSubmit = (e) => {
        console.log()
        e.preventDefault();
        const filteredData = data.filter(dev => dev.devName === isSelectedDev)
        console.log(filteredData)
    }

    const handleReset = (e) => {

        e.preventDefault();
    }



    return (
        <div className='filters'>
            <form className='filters__form'>
                <div className='filters__form-container'>
                    <fieldset className='filters__dev-selected' form='filters__form' name='selected-dev'>
                        <label className='filters__title'>Dev</label>
                        <select id="selected-dev" name="selected-dev" className='filters__selection-form' onChange={handleChangeSelectionDev} value={isSelectedDev}>
                            {data.map((dev, i) => {
                                return <option value={dev.devName} key={i} className='filters__option'>{dev.devName}</option>
                            })}
                        </select>
                    </fieldset>
                    <fieldset className='filters__status-selected' form='filters__form' name='selected-status'>
                        <label className='filters__title'>Status</label>
                        <select id="selected-status" name="selected-status" className='filters__selection-form' onChange={handleChangeSelectionStatus} value={isSelectedStatus}>
                            {status.map((state, i) => {
                                return <option value={state.status} key={i} className='filters__option'>{state.status}</option>
                            })}
                        </select>
                    </fieldset>
                    <fieldset className='filters__checkbox' form='filters__form' name='checkbox'>
                        <input type="checkbox" onChange={handleChangeChecked} checked={isChecked} className='filters__checked-form' />
                        <label className='filters__title-checked'>Show Efficiency</label>
                    </fieldset>
                </div>
                <div className='filters__button-container'>
                    <Button title='Apply' className='filters__button-apply' handleSubmit={handleSubmit} />
                    <Button title='Reset Filters' className='filters__button-reset' handleSubmit={handleReset} />
                </div>
            </form>
        </div>
    );
};

export default FilterSection;