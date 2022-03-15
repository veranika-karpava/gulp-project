import React from 'react';
import { dollar } from '../assets/icons/dollar-sign.png';

const ProjectInfo = ({ data }) => {


    const totalDataTime = [{ title: "Changes", data: data.totalChanges, add: false },
    { title: "Origin", data: data.totalOrigin, add: false },
    { title: "Programming", data: data.totalProgramming, add: true },
    { title: "Markup", data: data.totalMarkUp, add: true },
    { title: "Graphic Design", data: data.totalDesign, add: true },
    { title: "Estimation", data: data.totalEstimation, add: true },
    { title: "Investigation", data: data.totalInvestigation, add: true },
    { title: "Bug Fixing", data: data.totalBugFix, add: true },
    { title: "Quality Assurance", data: data.totalQA, add: true },
    { title: "Meetings", data: data.totalMeetings, add: true },
    { title: "Other", data: data.totalOther, add: true }]

    const currentDataTime = [{ title: "Changes", data: data.curChanges }, { title: "Origin", data: data.curOrigin }, { title: "Programming", data: data.curProgram, add: true }, { title: "Sum", data: data.curSum }]

    const estimationsDataTime = [{ title: "Changes", data: data.estChanges }, { title: "Origin", data: data.estOrigin }, { title: "Sum", data: data.estSum }]

    const renderTotalTableData = () => {
        return totalDataTime.map((item, i) => {
            const { title, data } = item
            return (
                <tr key={i} className={item.add ? 'results__row-add' : 'results__row'}>
                    <th className='results__heading-row'>{title}</th>
                    {!data ? <td className='results__data-row'> - h</td> : <td className='results__data-row'>{data}h</td>}
                </tr>
            )
        })
    }

    const sumTotalHours = () => {
        let totalHours = 0;
        totalDataTime.forEach(item => totalHours = totalHours + Number(item.data));
        let newTotalHours = totalHours.toFixed(2);
        return newTotalHours;
    }

    const renderCurTableData = () => {
        return currentDataTime.map((item, i) => {
            const { title, data } = item
            return (
                <tr key={i} className={item.add ? 'results__row-add results__row-add-time' : 'results__row results__row-time'}>
                    <th className='results__heading-row'>{title}</th>
                    {!data ? <td className='results__data-row'> - h</td> : <td className='results__data-row'>{data}h</td>}
                </tr>
            )
        })
    }

    const renderEstTableData = () => {
        return estimationsDataTime.map((item, i) => {
            const { title, data } = item
            return (
                <tr key={i} className='results__row results__estimations'>
                    <th className='results__heading-row'>{title}</th>
                    {!data ? <td className='results__data-row'> - h</td> : <td className='results__data-row'>{data}h</td>}
                </tr>
            )
        })
    }

    return (
        <div className='results__container-project'>
            <div className='results__container-info-project'>
                <article className='results__info-project'>
                    <h1 className='results__heading-info'>Project Information</h1>
                    <div className='results__container-info'>
                        <h2 className='results__subheading-info'>Project name</h2>
                        {!data.projectName ? <p className='results__content-info'> - </p> :
                            <p className='results__content-info'>{data.projectName} </p>}
                    </div>
                    <div className='results__container-info'>
                        <h2 className='results__subheading-info'>Team lead</h2>
                        {!data.lead ? <p className='results__content-info'> - </p> :
                            <p className='results__content-info'>{data.lead} </p>}
                    </div>
                    <div className='results__container-info'>
                        <h2 className='results__subheading-info'>Created</h2>
                        {!data.created ? <p className='results__content-info'> - </p> :
                            <p className='results__content-info'>{data.created} </p>}
                    </div>
                    <div className='results__container-info'>
                        <h2 className='results__subheading-info'>Finished</h2>
                        {!data.finished ? <p className='results__content-info'> - </p> :
                            <p className='results__content-info'>{data.finished} </p>}
                    </div>
                    <div className='results__container-info'>
                        <h2 className='results__subheading-info'>Categories</h2>
                        {!data.categories ? <p className='results__content-info'> - </p> :
                            <p className='results__content-info'>{data.categories} </p>}
                    </div>
                    <div className='results__container-info'>
                        <h2 className='results__subheading-info'>Time</h2>
                        {!data.time ? <p className='results__content-info'> - </p> : <img src={dollar} className='results__content-image' />}
                    </div>
                    <div className='results__container-info'>
                        <h2 className='results__subheading-info'>Label</h2>
                        {!data.label ? <p className='results__content-info'> - </p> :
                            <p className='results__content-info-label'>{data.label} </p>}
                    </div>
                    <div className='results__container-info'>
                        <h2 className='results__subheading-info'>Tag</h2>
                        {!data.tag ? <p className='results__content-info'> - </p> :
                            <a href={data.tag} className='results__content-info-link'>Page Mockup</a>}
                    </div>
                    <div className='results__container-info'>
                        <h2 className='results__subheading-info'>Status</h2>
                        {!data.status ? <p className='results__content-info'> - </p> :
                            <p className={data.status === "Non-Completed" ? 'results__content-info-status-non' : 'results__content-info-status'}>{data.status} </p>}
                    </div>
                    <div className='results__container-info'>
                        <h2 className='results__subheading-info'>Team</h2>
                        {!data.team ? <p className='results__content-info'> - </p> :
                            <p className='results__content-info'>{data.team} </p>}
                    </div>
                </article>
            </div>
            <div className='results__container-time-project'>
                <article className='results__time-project'>
                    <h1 className='results__heading-info'>Project Time</h1>
                    <div className='results__container-time'>
                        <div className='results__container-total-time'>
                            <h2 className='results__subheading-time'>Total time(Hours)</h2>
                            <table className='results__table-time'>
                                <tbody className='results__body-time'>
                                    {renderTotalTableData()}
                                    <tr className='results__row'>
                                        <th className='results__heading-row'>Sum</th>
                                        {data.length === 0 ? <td className='results__data-row'> - h </td> : <td className='results__data-row'>{sumTotalHours()}h</td>}
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='results__container-current-time'>
                            <div className='results__current-month'>
                                {!data.curMonth ? <h2 className='results__subheading'> Time (Hours) by Current Month</h2> : <h2 className='results__subheading'> Time (Hours) by Current Month ({data.curMonth})</h2>}
                                <table className='results__table-time'>
                                    <tbody className='results__body-time'>
                                        {renderCurTableData()}
                                    </tbody>
                                </table>
                            </div>
                            <div className='results__estimations'>
                                <h2 className='results__subheading results__subheading-estimation'> Estimations(Hours)</h2>
                                <table className='results__table-estimations'>
                                    <tbody className='results__body-time'>
                                        {renderEstTableData()}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default ProjectInfo;