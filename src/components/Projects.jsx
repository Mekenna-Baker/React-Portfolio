import React from 'react';
import '../css/Projects.css';

// Create an array of objects to hold the project data //

const projectsInfo = [
    {
        title: 'Weather to Wear',
        description:'Provides user with an outfit suggestion based off of the weather in the requested location. ',
        image: './images/weathertowear.PNG',
        deployedLink: 'https://kevinkerman1.github.io/group-project-1/',
        repoLink: 'https://github.com/KevinKerman1/group-project-1'
    },
    {
        title: 'Color Canvas',
        description: 'Allows a user to create, save, and delete an art project that they drew.',
        image: './images/color_canvas.PNG',
        deployedLink: 'https://mekenna-baker.github.io/Week-2-challenge/',
        repoLink: 'https://github.com/Mekenna-Baker/Color-Canvas'
    },
    {
        title: 'JobHub',
        description: 'Create, update, and delete customers, employees and their associated jobs.',
        image: './images/jobhub.PNG',
        deployedLink: 'https://jobhub-fxiq.onrender.com',
        repoLink: 'https://github.com/Mekenna-Baker/JobHub'
    },
    {
        title: 'Vehicle Builder',
        description: 'A command-line app that allows the user to create a new vehicle, or perform action(s).',
        image: '../images/vehicle_builder_img.PNG',
        deployedLink: 'https://github.com/Mekenna-Baker/Vehicle-Builder',
        repoLink: 'https://github.com/Mekenna-Baker/Vehicle-Builder'
    },
    {
        title: 'ReadMe Generator',
        description: 'A command-line app that generates a ReadMe file based on user input.',
        image: '../images/readme.generator_img.PNG',
        deployedLink: 'https://github.com/Mekenna-Baker/ReadMe.generator',
        repoLink: 'https://github.com/Mekenna-Baker/ReadMe.generator'
    },
    {
        title: 'Rock, Paper, Scissors',
        description: 'Play rock, paper, scissors against the computer!',
        image: '../images/rock-paper-scissors_img.PNG',
        deployedLink: 'https://github.com/Mekenna-Baker/Rock-Paper-Scissors',
        repoLink: 'https://github.com/Mekenna-Baker/Rock-Paper-Scissors'
    },
];

// Create a function to render the project info and cards //

const Projects = () => {
    
    return (
        <section id="projects" className="container mt-5">
            <h2>My Projects</h2>

            <div className="row">
                {/* Using map to iterate through the array and generate a new card for each project*/}
                {projectsInfo.map((project, index) => (

                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card" key={index}>
                            <img src={project.image} className="card-img-top" alt={project.title} />

                            <div className="card-body">
                                <h5 className="card-title">{project.title}</h5>
                                <p className="card-text">{project.description}</p>

                                {/* The projects' deployed links */}
                                <div className="button-container">
                                    <a href={project.deployedLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                                        Deployed Project
                                    </a>
                                    {/* The projects' repository links */}
                                    <a href={project.repoLink} className="btn btn-secondary ml-2" target="_blank" rel="noopener noreferrer">
                                        Project Repository
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
};

export default Projects;