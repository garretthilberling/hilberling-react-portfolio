import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import { Image, SlideFade, ScaleFade, Box, chakra } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';


function Projects({ name, description }) {
    const paw = <FontAwesomeIcon icon={faPaw} className="px-1 text-violet-400"></FontAwesomeIcon>

    const projectArr = [
        {
            name: <>Pet{paw}Fetcher</>,
            description:
            <> 
                Built as a team, assumed a <span className="text-sky-300 font-semibold">leadership role</span>. 
                <br></br>
                <br></br>
                Pet{paw}Fetcher is dedicated to enriching the lives of all pets looking for their forever homes, as well as that of their humans who are either in need of companionship, or relief of the same.
                <br></br>
                <br></br>
                Whether you are looking for the perfect match for your unwanted pet, or finding that one of a kind friend to join your family - we can help.
                <br></br>
                <br></br>
                Search our database for available pets, or list your pet for adoption so others can make a connection that will make both lives the best they can be!
                <br></br>
                <br></br>
                The languages and technologies used to build this full-stack application are: JavaScript, ES6, MySQL, mysql2, Sequelize, bcrypt, express, express-handlebars, express-session, connect-session-sequelize, body-parser, CSS, Tailwind CSS, UIKit, and the implementation of the MVC file structure.
            </>,
            githubRepo: 'https://github.com/garretthilberling/pet-fetcher',
            deployedUrl: 'https://pet-fetcher.herokuapp.com/'        },
        {
            name: <>Social🧑‍🤝‍🧑Network🤖API</>,
            description: 
            <>
                Social🧑‍🤝‍🧑Network🤖API is a simple API built to be used as the backend for a social network website. Create a user, add a user as a friend, share your thoughts, and react to the thoughts of other users! The languages and technologies used to build this application are: JavaScript, ES6, MongoDB, and Mongoose.
            </>,
            githubRepo: 'https://github.com/garretthilberling/social-network-api',
            deployedUrl: 'https://drive.google.com/file/d/1_83qfodI__a5Vg0wvUlAc6PvUfXCkdk4/view'
        },
        {
            name: <>Employee-Tracker</>,
            description: 
            <>
                E-T is an application designed to help clients manage a database of employees and managers. The languages and technologies used to build this application are JavaScript, ES6, Node.js, Inquirer, MySQL, and Console.Table.
            </>,
            githubRepo: 'https://github.com/garretthilberling/employee-tracker',
            deployedUrl: 'https://drive.google.com/file/d/1YioDuPf3SD0VFJLZ1V6n_pK2-ZYGpj6u/view'
        },
        {
            name: <>TeamHub-Generator</>,
            description: 
            <>
                TH-G is an application designed to help clients generate an HTML output displaying inputted contact and identification information for the project manager (PM), engineers (devs), and interns for a given project. The languages used to build this application are JavaScript, ES6, Node.js, Inquirer, TDD, and OOP.
            </>,
            githubRepo: 'https://github.com/garretthilberling/teamhub-generator',
            deployedUrl: 'https://garretthilberling.github.io/teamhub-generator/'
        },
        {
            name: <>CoinHiz</>,
            description: 
            <>
                Built as a team! 
                <br></br>
                <br></br> 
                Who is this for?
                <br></br>
                <br></br>
                Anyone interested in the fascinating world of Crypto can use this as a guide to find the top coins, how many are in production and how many are still left to be mined.
                <br></br>
                <br></br>
                How to use?
                <br></br>
                <br></br>
                Find the top coin gainer for the past 24 hours, latest twitter feed postings, and info with charts on top the 100 coins.
            </>,
            githubRepo: 'https://github.com/garretthilberling/coinhiz/',
            deployedUrl: 'https://garretthilberling.github.io/coinhiz/'
        },
        {
            name: <>codeQuiz</>,
            description: 
            <>
                codeQuiz is an application where users engage in a timed quiz in which wrong answers deduct points from the timer and at the end you can store your name and score- the score being the remaining time left. The languages used to build this application are HTML, CSS, and most importantly, JavaScript. The colors for the quiz are UCF themed and the highscores screen completely changes visually to a retro video game inspired scoreboard (with an 8bit outerspace background) that displays usernames and scores ranked by highest score.
            </>,
            githubRepo: 'https://github.com/garretthilberling/codeQuiz',
            deployedUrl: 'https://garretthilberling.github.io/codeQuiz/'
        },
    ]

    const nextSlideHandler = e => {

    }

    const prevSlideHandler = e => {

    }

    const jumpToSlideHandler = e => {

    }

    const [projects] = useState(projectArr);
    const [currentProject, setCurrentProject] = useState(projects[0]);

    return (
        <SlideFade in={name === 'projects'} offsetX={100} offsetY={0}>
            <section className="relative no-scrollbar">
                <ul id="track" className="flex overflow-x-auto gap-6 snap-x snap-mandatory before:shrink-0 before:w-[30vw] after:shrink-0 after:w-[30vw] relative no-scrollbar">
                    {projects.map((project, index) => (
                        <li className="shrink-0 snap-center" key={`project-${index}`}>
                            <div className="relative">
                                <img
                                    id={`carousel-item-${index}`}
                                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                                    className="block w-full"
                                    alt={project.name}
                                />
                                <div className="carousel-caption hidden md:block absolute bg-slate-900 bg-opacity-60 px-3 rounded">
                                    <h5 className="text-3xl">{project.name}</h5>
                                    <p className="pt-2">{project.description}</p>
                                    <div className="flex justify-center pt-3">
                                        <div className="grid grid-cols-2">
                                            <div>
                                                <a className="bg-slate-900 hover:bg-sky-50 hover:text-slate-900 py-1 px-2 rounded" href={project.githubRepo}>Github Repo</a>
                                            </div>
                                            <div>
                                                {
                                                    index !== 1 && index !== 2 && index !== 3 ? (
                                                        <a className="bg-slate-900 hover:bg-sky-50 hover:text-slate-900 py-1 px-2 rounded" href={project.deployedUrl}>Try it for yourself!</a>
                                                    ) : (
                                                        <a className="bg-slate-900 hover:bg-sky-50 hover:text-slate-900 py-1 px-2 rounded" href={project.deployedUrl}>Video Demonstration</a>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
                    <button
                            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                            type="button"
                            id="prev"
                        >
                            <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                            type="button"
                            id="next"
                        >
                            <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                <nav className="flex justify-center py-5">
                    <ul className="grid grid-cols-2">
                        {projects.map((project, index) => (
                            <li key={`snap-to-${index}`}>
                                <a href={`#carousel-item-${index}`} className="scroll-smooth sm:hidden lg:block hover:text-sky-200 transition-opacity">{project.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </section>
        </SlideFade>
    )
}

export default Projects;