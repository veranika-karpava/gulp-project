import React from 'react';
import Button from './Button';

// data for status selection
const status = [
    {
        status: "All Statuses"
    },
    {
        status: "Non-Completed"
    },
    {
        status: "Completed"
    }
]


const FilterSection = ({ dataToFilter, setDataToFilter, dataIsFiltred, setDataIsFiltred, isSelectedDev, setIsSelectedDev, isSelectedStatus, setIsSelectedStatus, isChecked, setIsChecked }) => {

    // to select name of Dev
    const handleChangeSelectionDev = (e) => {
        setIsSelectedDev(e.target.value);
    }

    // to select status
    const handleChangeSelectionStatus = (e) => {
        setIsSelectedStatus(e.target.value);
    }

    //to show/ no-show effeiciency section
    const handleChangeChecked = () => {
        setIsChecked(!isChecked);
    }

    // to filter data
    const handleSubmit = (e) => {
        e.preventDefault();
        // to find index of selected Dev
        const devIndex = dataToFilter.findIndex((dev) => dev.devName === isSelectedDev)
        if (isSelectedStatus === "All Statuses") {
            const filtredDataProject = dataToFilter[devIndex].projectList
            setDataIsFiltred(filtredDataProject)
        } else {
            const filtredDataProject = dataToFilter[devIndex].projectList.find((status) => status.status == isSelectedStatus)
            setDataIsFiltred(filtredDataProject)
        }
    }

    // to reset all filters
    const handleReset = (e) => {
        setDataToFilter(dataToFilter);
        setIsSelectedDev(dataToFilter[0].devName);
        setIsSelectedStatus('All Statuses');
        setIsChecked(false);
        e.preventDefault();
    }

    return (
        <section className='filters'>
            <form className='filters__form'>
                <div className='filters__form-container'>
                    <fieldset className='filters__dev-selected' form='filters__form' name='selected-dev'>
                        <label className='filters__title'>Dev</label>
                        <select id="selected-dev" name="selected-dev" className='filters__selection-form' onChange={handleChangeSelectionDev} value={isSelectedDev}>
                            {dataToFilter.map((dev, i) => {
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
        </section>
    );
};

export default FilterSection;