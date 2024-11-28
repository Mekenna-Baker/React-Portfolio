import React from 'react';
import '../css/Resume.css';

function Resume() {
  return (
    <div className="resume-container">
      <h1>My Skills</h1>
      <div className="skills-boxes">
        <div className="skill-box">
          <h2>Front End</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="skill-box">
          <h2>Back End</h2>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>GraphQL</li>
          </ul>
        </div>
        <div className="skill-box">
          <h2>Tools & Platforms</h2>
          <ul>
            <li>Git/GitHub</li>
            <li>VS Code</li>
            <li>Render</li>
            <li>Indsomia</li>
          </ul>
        </div>
      </div>
      <div className="resume-download">
        <button className="download-btn">Download My Resume</button>
      </div>
    </div>
  );
}

export default Resume;