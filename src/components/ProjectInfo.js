import React from 'react';
import EfficiencyInfo from './EfficiencyInfo';

const ProjectInfo = () => {
    return (
        <section className='project'>
            <div>
                <article className='project__info'></article>
                <article className='project__time'></article>
            </div>
            <EfficiencyInfo />

        </section>
    );
};

export default ProjectInfo;