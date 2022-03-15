import React, { useState } from 'react';
import taskData from '../data/task.json';
import sort from '../assets/icons/sort.svg';
import RowsCount from './RowsCount';

const TaskInfo = ({ data, isSelectedDev }) => {
    const [isShowed, setIsShowed] = useState(false)

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

        const tableHeading = defaultData;
        return tableHeading.map((key, index) => {
            return <th className='results__heading-container-table-task' key={index}>
                <h2 className='results__heading-text'>{key}</h2>
                <img src={sort} alt='Sort icon' className='results__sort-icon' onClick={() => handleSorting('status')} />
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

    const taskListData = filterDataTask();

    const totalRows = taskListData.length;


    console.log(totalRows)

    // show more option in table 
    const showToggle = (e) => {
        setIsShowed(!isShowed)
    }

    const getRenderedItems = (array) => {
        let showArray = [];
        let showMoreArray = [];
        if (!isShowed) {
            showArray = [...array.splice(0, 2)]
            console.log(isShowed)
            console.log(showArray)
            return showArray;
        }
        showMoreArray = [...array]
        console.log(isShowed)

        console.log(showMoreArray)
        return showMoreArray;
    }




    // for rendering data from taskListData
    const renderTableData = () => {
        return taskListData.map((item, index) => {
            const { taskName, developer, workType, status, estimation, totalTimeSpentByAll, myTimeSpentByPeriod, efficiency } = item
            // console.log(developer)

            return (
                <tr className='results__row-table-task' key={index}>

                    {taskName === "Sum" ? <td className='results__data results__data-name-sum'>{taskName}</td> : <td className='results__data results__data-name'>{taskName}</td>}

                    {developer.length > 2 ?
                        <td className='results__data results__developer'>
                            <p className='results__content-developer'>
                                {getRenderedItems(developer).map((name, i) => {
                                    console.log(name)
                                    return <span key={i}>{`${name}, `}</span>
                                })}
                            </p>
                            {/* <button className='results__button-show-more' onClick={showToggle}>{isShowed ? 'Show less' : `Show more(${developer.length})`}</button> */}
                        </td>
                        :
                        <td className='results__data results__developer'><p className='results__content-developer'>{`${developer}`}</p></td>
                    }


                    {/* <td className='results__data results__developer'>
                        {getRenderedItems(developer).map((name, i) => {
                            <>
                                <p className='results__content-developer' key={i}>{`${name}, `}</p>
                                <button className='results__button-show-more' onClick={showToggle}>{isShowed ? 'Show less' : `Show more(${developer.length})`}</button>
                            </>
                        })}
                    </td> */}

                    {/* {developer.length > 2 ?
                        <td className='results__data results__developer'>
                            {getRenderedItems(developer).map((name, i) => {
                                console.log(name)
                                return <p className='results__content-developer' key={i}>{`${name}, `}</p>
                            })}
                            {!isShowed ? <button className='results__button-show-more' onClick={showToggle}>{`Show more(${developer.length})`}</button> : <button className='results__button-show-more' onClick={showToggle}>{`Show less(${developer.length})`}</button>}
                        </td>
                        : <td className='results__data results__developer'>
                            {developer}</td>} */}

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



    const handleSorting = (e, key) => {

        const taskSortedListData = taskListData.sort((a, b) => (a.key < b.key ? -1 : 1));

        console.log(taskSortedListData)
        console.log("it works")
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