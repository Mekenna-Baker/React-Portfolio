import React from 'react';
import '../css/Resume.css';

function Resume() {
  return (
    <div className="resume-container">
      <h1>Skills </h1>
      <div className="skills-boxes">
        <div className="skill-box">
          <h2>Front End</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Typescript</li>
            <li>Bootstrap</li>
            <li>React.js</li>
            <li>jQuery</li>
          </ul>
        </div>
        <div className="skill-box">
          <h2>Back End</h2>
          <ul>
            <li>SQL</li>
            <li>Postgres</li>
            <li>Sequelize</li>
            <li>Apollo</li>
            <li>GraphQL</li>
            <li>Node.js</li>
            <li>express.js</li>
            <li>REST APIs</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>JWT</li>
            <li>Application Programming Interfaces (API) </li>
          </ul>
        </div>
        <div className="skill-box">
          <h2>Tools & Platforms</h2>
          <ul>
            <li>Git</li>
            <li>Vite</li>
            <li>Render</li>
            <li>Object Oriented Programming</li>
            <li>DOM</li>
            <li>MERN</li>
            <li>Vitest</li>
            <li>Github</li>
            <li>CircleCI</li>
            <li>Cypress</li>
            <li>Insomnia</li>
            <li>Visual Studio Code</li>
            <li>MongoDB Compass</li>
            <li>Command Line Interface</li>
            <li>CI/CD</li>
            <li>Prompt Engineering</li>
            <li>Responsive Web Design</li>
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