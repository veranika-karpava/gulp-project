import React, { useState } from 'react';
import task from '../data/task.json';
import sort from '../assets/icons/sort.svg';

const defaultData =
    [
        'Task name',
        'Developer',
        'Work Type',
        'Status',
        'Estimation (h)',
        'Total time spent by All',
        'My Time spent by Period(h)',
        'Efficiency',
    ]

const TaskInfo = ({ data, isSelectedDev }) => {

    const handleSort = () => {

    }

    // filter data depends on selected Dev and name of project
    const filterDataTask = () => {
        const devIndex = task.findIndex((dev) => dev.devName === isSelectedDev);

        const projectIndex = task[devIndex].projectList.findIndex((item) => item.projectName === data.projectName);

        const taskListData = ((devIndex < 0 || projectIndex < 0) ?
            task[devIndex].projectList[0].taskList : task[devIndex].projectList[projectIndex].taskList);

        return taskListData;
    }

    const taskListData = filterDataTask();

    console.log(taskListData)


    // for rendering data from taskListData
    const renderTableData = () => {
        return taskListData.map((item, index) => {
            const { taskName, developer, workType, status, estimation, totalTimeSpentByAll, myTimeSpentByPeriod, efficiency } = item
            return (
                <tr className='results__row-container' key={index}>
                    <td className='results__data results__data-name'>{taskName}</td>
                    <td className='results__data results__developer'>{developer}</td>
                    <td className='results__data results__work'>{workType}</td>
                    {status === "Completed" ? <td className='results__data results__status-completed'>{status}</td> : <td className='results__data results__status-non'>{status}</td>}
                    <td className='results__data'>{estimation}</td>
                    {taskName === "Sum" ? <td className='results__data results__data-sum'>{totalTimeSpentByAll}h</td> : <td className='results__data'>{totalTimeSpentByAll}</td>}

                    {taskName === "Sum" ? <td className='results__data results__data-sum'>{myTimeSpentByPeriod}h</td> : <td className='results__data'>{myTimeSpentByPeriod}</td>}

                    {taskName === "Sum" ? <td className='results__data results__data-sum'>{efficiency}({myTimeSpentByPeriod}h)</td> : <td className='results__data'>{efficiency}</td>}
                </tr>
            )
        })
    }

    //for rendering heading of table
    const renderTableHeader = () => {
        // get heading from keys of object
        const tableHeading = Object.keys(taskListData[0]);

        // replace heading from keys to default heading
        tableHeading.splice(0, tableHeading.length, ...defaultData);
        return tableHeading.map((key, index) => {
            return <th className='results__heading-task' key={index}>
                <h2 className='results__heading-text'>{key}</h2>
                <img src={sort} alt='Sort icon' className='results__sort-icon' onClick={handleSort} />
            </th>
        })
    }

    return (
        <article className='results__task-info'>
            <table className='results__table-task'>
                <thead className='results__heading-container'>
                    {renderTableHeader()}
                </thead>
                <tbody className='results__body'>
                    {renderTableData()}
                </tbody>
            </table>
        </article>
    );
};

export default TaskInfo;