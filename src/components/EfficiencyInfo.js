import React from 'react';

const EfficiencyInfo = ({ data, isChecked }) => {

    const totalDataEst = [{ title: "Changes", data: '', percent: '', curData: '', curPercent: '' },
    { title: "Origin", data: data.totalEfficOriginHour, percent: data.totalEfficOrigin, curData: data.curEfficOriginHour, curPercent: data.curEfficOrigin },
    { title: "Average", data: data.totalEfficAverHour, percent: data.totalEfficAver, curData: data.curEfficAverHour, curPercent: data.curEfficAver }]

    const renderTotalTableData = () => {
        return totalDataEst.map((item, i) => {
            const { title, data, percent } = item
            return (
                <tr key={i} className='results__row-total-effic'>
                    <th className='results__heading-row-effic'>{title}</th>
                    {!data ?
                        (title == "Changes" ?
                            <>
                                <td className='results__data-row results__data-row-hours'></td>
                                <td className='results__data-row results__data-row-percent'></td>
                            </>
                            :
                            <>
                                <td className='results__data-row results__data-row-hours'> - h</td>
                                <td className='results__data-row results__data-row-percent'> - %</td>
                            </>
                        )
                        :
                        <>
                            <td className='results__data-row results__data-row-hours'>{data}h</td>
                            <td className='results__data-row results__data-row-percent'>{percent}%</td>
                        </>
                    }
                </tr>
            )
        })
    }

    const renderCurrentTableData = () => {
        return totalDataEst.map((item, i) => {
            const { title, data, curData, curPercent } = item
            return (
                <tr key={i} className='results__row-current-effic'>
                    <th className='results__heading-row-effic'>{title}</th>
                    {!data ?
                        (title == "Changes" ?
                            <>
                                <td className='results__data-row results__data-row-hours'></td>
                                <td className='results__data-row results__data-row-percent'></td>
                            </>
                            :
                            <>
                                <td className='results__data-row results__data-row-hours'> - h</td>
                                <td className='results__data-row results__data-row-percent'> - %</td>
                            </>
                        )
                        :
                        <>
                            <td className='results__data-row results__data-row-hours'>{curData}h</td>
                            <td className='results__data-row results__data-row-percent'>{curPercent}%</td>
                        </>
                    }
                </tr>
            )
        })
    }


    return (
        <>
            {!isChecked ? < article className='results__none-display'></article> : <article className='results__efficiency'>
                <h1 className='results__heading'>Efficiency</h1>
                <div className='results__container-efficiency'>
                    <div className='results__total'>
                        <h2 className='results__subheading'>Total Efficiency</h2>
                        <table className='results__table-efficiency'>
                            <tbody className='results__body-efficiency'>
                                {renderTotalTableData()}
                            </tbody>
                        </table>
                    </div>
                    <div className='results__current'>
                        <h2 className='results__subheading'>Efficiency by Current Month</h2>
                        <table className='results__table-efficiency'>
                            <tbody className='results__body-efficiency'>
                                {renderCurrentTableData()}
                            </tbody>
                        </table>
                    </div>
                </div>
            </article>}
        </>
    );
};

export default EfficiencyInfo;