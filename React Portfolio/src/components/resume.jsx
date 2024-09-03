import React from 'react';
import '../css/Resume.css';

const Resume = () => {
    return (
        <div className="resume-download btn btn-primary">
            <a href="public/MekennaBaker_CV.docx"
            download="MekennaBaker_CV.docx">Download My Resume
            </a>

            {/* a tag with href to resume.pdf */}

        </div>
    );
};

export default Resume;