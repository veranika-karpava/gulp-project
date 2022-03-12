import React from 'react';

const EfficiencyInfo = () => {
    return (
        <article className='efficiency'>
            <h1 className='efficiency__heading'>Efficiency</h1>
            <div className='efficiency__container-info'>
                <div className='efficiency__total'>
                    <h2 className='efficiency__subheading'>Total Efficiency</h2>
                    <table className='efficiency__table-efficiency'>
                        <tbody>
                            <tr className='efficiency__row'>
                                <th className='efficiency__heading-table'>Changes</th>
                                <td className='efficiency__hours'>Smth</td>
                                <td className='efficiency__percentage'>Smth</td>
                            </tr>
                            <tr className='efficiency__row'>
                                <th className='efficiency__heading-table'>Origin </th>
                                <td className='efficiency__hours'>Smth</td>
                                <td className='efficiency__percentage'>Smth</td>
                            </tr>
                            <tr className='efficiency__row'>
                                <th className='efficiency__heading-table'>Average</th>
                                <td className='efficiency__hours'>Smth</td>
                                <td className='efficiency__percentage'>Smth</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='efficiency__current'>
                    <h2 className='efficiency__subheading'>Efficiency by Current Month</h2>
                    <table className='efficiency__table-efficiency'>
                        <tr className='efficiency__row'>
                            <th className='efficiency__heading-table'>Changes</th>
                            <td className='efficiency__hours'>Smth</td>
                            <td className='efficiency__percentage'>Smth</td>
                        </tr>
                        <tr className='efficiency__row'>
                            <th className='efficiency__heading-table'>Origin</th>
                            <td className='efficiency__hours'>Smth</td>
                            <td className='efficiency__percentage'>Smth</td>
                        </tr>
                        <tr className='efficiency__row'>
                            <th className='efficiency__heading-table'>Average</th>
                            <td className='efficiency__hours'>Smth</td>
                            <td className='efficiency__percentage'>Smth</td>
                        </tr>
                    </table>
                </div>
            </div>
        </article>
    );
};

export default EfficiencyInfo;