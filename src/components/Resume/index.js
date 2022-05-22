import React from 'react';
import resume from '../../assets/img/resume/resume.pdf';
import { ScaleFade } from '@chakra-ui/react';

function Resume({ name }) {
    return(
        <section>
            <ScaleFade in={name === 'resume'} transitionDuration="1000ms">
                <div className="flex justify-center h-max">
                        <iframe 
                            title="resume" 
                            src={`${resume}`} 
                            alt="My resume" 
                            height="500" 
                            className="md:w-8/12 w-full"
                            scrolling="auto"
                            type="application/pdf"
                        />
                </div>
            </ScaleFade>
            </section>
    )
}

export default Resume;