import React from 'react';
import resume from '../../assets/img/resume/resume.pdf'

function Resume() {
    return(
        <section>
            <div className="flex justify-center h-max">
                    <iframe title="resume" src={`${resume}#view=fitW`} alt="My resume" height="100%" width="50%" className=""/>
            </div>
            <div className="flex justify-center my-3">
                <a href={resume} download className="hover:bg-sky-50 hover:text-slate-900 transition-all fade-in-out duration-300 py-1 px-2 rounded">download</a>
            </div>
        </section>
    )
}

export default Resume;