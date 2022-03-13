import React from 'react';
import ProjectInfo from './ProjectInfo';
import EfficiencyInfo from './EfficiencyInfo';
import TaskInfo from './TaskInfo';

const ResultsSection = ({ data, isChecked }) => {
    console.log(data)
    return (
        <section className='results'>
            <ProjectInfo data={data} />
            <EfficiencyInfo isChecked={isChecked} />
            <TaskInfo />
        </section>
    );
};

export default ResultsSection;