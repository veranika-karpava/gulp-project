import React from 'react';
import ProjectInfo from './ProjectInfo';
import EfficiencyInfo from './EfficiencyInfo';
import TaskInfo from './TaskInfo';

const ResultsSection = ({ data, isChecked, isSelectedDev, isSelectedStatus }) => {
    return (
        <section className='results'>
            <ProjectInfo data={data} />
            <EfficiencyInfo isChecked={isChecked} data={data} />
            <TaskInfo data={data} isSelectedDev={isSelectedDev} isSelectedStatus={isSelectedStatus} />
        </section>
    );
};

export default ResultsSection;