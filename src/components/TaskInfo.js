import React, { useEffect, useState } from 'react';
import taskData from '../data/task.json';
import defaultKey from '../data/defaultData.json'
import sort from '../assets/icons/sort.svg';
import RowsCount from './RowsCount';

const TaskInfo = ({ data, isSelectedDev }) => {
    const [isShowed, setIsShowed] = useState(false);
    const [taskListData, setTaskListData] = useState([]);
    const [isButtonId, setIsButtonId] = useState('');

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

    //for rendering heading of table
    const renderTableHeader = () => {
        // get key for sorting
        const getKey = (val) => {
            const newKeyForSort = Object.keys(defaultKey).find(key => defaultKey[key] === val)
            return newKeyForSort;
        }

        const tableHeading = defaultData;
        return tableHeading.map((key, index) => {
            return <th className='results__heading-container-table-task' key={index}>
                <h2 className='results__heading-text'>{key}</h2>
                <img src={sort} alt='Sort icon' className='results__sort-icon'
                    onClick={() => handleSortingNumber(getKey(key))} />
            </th>
        })
    }

    // filter data depends on selected Dev and name of project
    const filterDataTask = () => {
        // index of selected Dev
        const devIndex = taskData.findIndex((dev) => dev.devName === isSelectedDev);
        const projectIndex = taskData[devIndex].projectList.findIndex((item) => item.projectName === data.projectName);
        const taskListData = ((devIndex < 0 || projectIndex < 0) ?
            [] : taskData[devIndex].projectList[projectIndex].taskList);
        return taskListData;
    }

    // filtered data
    useEffect(() => {
        setTaskListData(filterDataTask())
    }, [data])

    // number of rows  for countRows component
    const totalRows = taskListData.length;


    // sort data from table
    const handleSortingNumber = (sortKey) => {
        let tempTaskList = [...taskListData];
        let removedTaskList = tempTaskList.splice(-2);
        tempTaskList.sort((a, b) => {
            return a[sortKey] > b[sortKey]
                ? 1
                : a[sortKey] < b[sortKey]
                    ? -1
                    : 0;
        });
        tempTaskList = [...tempTaskList, ...removedTaskList];
        setTaskListData(tempTaskList);
    }

    // show more option in table 
    const showToggle = (e) => {
        e.preventDefault();
        setIsShowed(!isShowed);
        console.log(e.target.id)
        setIsButtonId(Number(e.target.id))
    }

    const getRenderedItems = (array) => {
        let baseArray = [...array];
        let showMoreArray = [...array]
        let showArray = baseArray.splice(0, 2);

        if (!isShowed) {
            return showArray;
        } else {
            return showMoreArray;
        }
    }

    // for rendering data from taskListData
    const renderTableData = () => {
        console.log(taskListData)
        return taskListData.map((item, index) => {
            const { taskName, developer, workType, status, estimation, totalTimeSpentByAll, myTimeSpentByPeriod, efficiency } = item

            console.log(developer)

            return (
                <tr className='results__row-table-task' key={index}>

                    {taskName === "Sum" ? <td className='results__data results__data-name-sum'>{taskName}</td> : <td className='results__data results__data-name'>{taskName}</td>}

                    {developer.length > 2 ?
                        <td className='results__data results__developer'>
                            <p className='results__content-developer'>
                                {getRenderedItems(developer).map((name, i) => <span key={i}>{name},</span>)}
                            </p>
                            <button id={index} className='results__button-show-more' onClick={(e) => { showToggle(e) }}>{isShowed && isButtonId === index ? 'Show less' : `Show more(${developer.length})`}</button>
                        </td>
                        :
                        <td className='results__data results__developer'>
                            <p className='results__content-developer'>
                                {developer.map((name, i) => <span key={i}>{name},</span>)}
                            </p>
                        </td>
                    }

                    <td className='results__data results__work'>{workType}</td>

                    {status === "Completed" ? <td className='results__data results__status-completed'>{status}</td> : <td className='results__data results__status-non'>{status}</td>}

                    <td className='results__data'>{estimation}</td>

                    {taskName === "Sum" ? <td className='results__data results__data-sum'>{totalTimeSpentByAll}h</td> : <td className='results__data'>{totalTimeSpentByAll}</td>}

                    {taskName === "Sum" ? <td className='results__data results__data-sum'>{myTimeSpentByPeriod}h</td> : <td className='results__data'>{myTimeSpentByPeriod}</td>}

                    {taskName === "Sum" ? <td className='results__data results__data-sum'>{efficiency}({myTimeSpentByPeriod}h)</td> : <td className='results__data'>{efficiency}</td>}
                </tr >
            )
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
                    <RowsCount totalRows={totalRows} />
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
                    <RowsCount totalRows={totalRows} />
                </article>
            }
        </>

    );
};

export default TaskInfo;