import React from 'react';
import ProjectInfo from './ProjectInfo';
import EfficiencyInfo from './EfficiencyInfo';
import TaskInfo from './TaskInfo';

const ResultsSection = () => {
    return (
        <section className='results'>
            <ProjectInfo />
            {/* <EfficiencyInfo /> */}
            <TaskInfo />
        </section>
    );
};

export default ResultsSection;