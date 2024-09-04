import React from 'react';
import '../css/Resume.css';

const Resume = () => {
    return (

        <div className="resume-container">

        <h2>If you'd like to learn more...</h2> 
        <p>feel free to download my resume!</p> 

        
        <div className="resume-download btn btn-primary">

            <a class="resume-button" href="public/MekennaBaker_CV.docx"
            download="MekennaBaker_CV.docx">Download My Resume
            </a>

        </div>
    </div>
    );
};

export default Resume;