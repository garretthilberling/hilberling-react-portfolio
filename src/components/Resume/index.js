import React from 'react';
import resume from '../../assets/img/resume/resume.pdf';

function Resume() {
    return(
        <section>
            <div className="flex justify-center h-max">
                    <iframe 
                        title="resume" 
                        src={`${resume}`} 
                        alt="My resume" 
                        height="500" 
                        width="60%" 
                        scrolling="auto"
                        type="application/pdf"
                        className=""
                    />
            </div>
        </section>
    )
}

export default Resume;