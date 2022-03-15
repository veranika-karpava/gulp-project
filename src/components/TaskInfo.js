import React, { useState, useEffect } from 'react';
import taskData from '../data/task.json';
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
    // const [taskListData, setIsTaskListData] = useState([])
    // console.log(taskListData)

    const handleSorting = (e, key) => {

        const taskSortedListData = taskListData.sort((a, b) => (a.key < b.key ? -1 : 1));

        console.log(taskSortedListData)
        console.log("it works")
    }

    // filter data depends on selected Dev and name of project
    const filterDataTask = () => {
        const devIndex = taskData.findIndex((dev) => dev.devName === isSelectedDev);
        const projectIndex = taskData[devIndex].projectList.findIndex((item) => item.projectName === data.projectName);

        const taskListData = ((devIndex < 0 || projectIndex < 0) ?
            [] : taskData[devIndex].projectList[projectIndex].taskList);

        return taskListData;
    }

    const taskListData = filterDataTask();

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

        const tableHeading = defaultData;
        return tableHeading.map((key, index) => {
            return <th className='results__heading-container-table-task' key={index}>
                <h2 className='results__heading-text'>{key}</h2>
                <img src={sort} alt='Sort icon' className='results__sort-icon' onClick={() => handleSorting('status')} />
            </th>
        })
    }

    return (
        <>
            {!taskListData.length ?
                <article className='results__task-info'>
                    <table className='results__table-task'>
                        <thead className='results__heading-table-task'>
                            <tr className='results__heading-row-table-task'>
                                {renderTableHeader()}
                            </tr>
                        </thead>
                    </table>
                </article>
                :
                <article className='results__task-info'>
                    <table className='results__table-task'>
                        <thead className='results__heading-table-task'>
                            <tr className='results__heading-row-table-task'>
                                {renderTableHeader()}
                            </tr>
                        </thead>
                        <tbody className='results__content-table-task'>
                            {renderTableData()}
                        </tbody>
                    </table>
                </article>
            }
        </>

    );
};

export default TaskInfo;