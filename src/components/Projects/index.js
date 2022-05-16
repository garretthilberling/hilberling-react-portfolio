import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { SlideFade } from "@chakra-ui/react";
import LgScreenCarousel from '../LgScreenCarousel';

function Projects({ name }) {
  const paw = (
    <FontAwesomeIcon
      icon={faPaw}
      className="px-1 text-violet-400"
    ></FontAwesomeIcon>
  );

  const [smShowDescription, toggleSmShowDescription] = useState(false)

  const [projects] = useState([
    {
      name: <>Pet{paw}Fetcher</>,
      description: (
        <>
          Built as a team, assumed a <span className="text-sky-300 font-semibold">leadership role</span>.
          <br></br>
          Pet{paw}Fetcher is an application where users can list their puppies for adoption or connect with other users to adopt a pet of their own. Users can like and comment on posts and can list their pet, including <span className="text-sky-300 font-semibold">uploading an image file</span>. This is done by converting the image into a <span className="text-sky-300 font-semibold">data url</span> and storing it in the database as a <span className="text-sky-300 font-semibold">string</span> (one of my contributions).
        </>
      ),
      githubRepo: "https://github.com/garretthilberling/pet-fetcher",
      deployedUrl: "https://pet-fetcher.herokuapp.com/",
      index: 0,
    },
    {
      name: <>Social🧑‍🤝‍🧑Network🤖API</>,
      description: (
        <>
          Social🧑‍🤝‍🧑Network🤖API is a simple API built to be used as the backend
          for a <span className="text-sky-300 font-semibold">social networking website</span>. Create a user, add a user as a friend, share your thoughts, and react to the thoughts of other users! The languages and technologies used to build this application are: JavaScript, ES6, MongoDB, and Mongoose.
        </>
      ),
      githubRepo: "https://github.com/garretthilberling/social-network-api",
      deployedUrl:
        "https://drive.google.com/file/d/1_83qfodI__a5Vg0wvUlAc6PvUfXCkdk4/view",
      index: 1,
    },
    {
      name: <>Employee-Tracker</>,
      description: (
        <>
          E-T is an application designed to help clients manage a <span className="text-sky-300 font-semibold">database of employees and  managers </span>. The languages and technologies used to build this application are JavaScript, ES6, Node.js, Inquirer, MySQL, and Console.Table.
        </>
      ),
      githubRepo: "https://github.com/garretthilberling/employee-tracker",
      deployedUrl:
        "https://drive.google.com/file/d/1YioDuPf3SD0VFJLZ1V6n_pK2-ZYGpj6u/view",
      index: 2,
    },
    {
      name: <>TeamHub-Generator</>,
      description: (
        <>
          TH-G is an application designed to help clients <span className="text-sky-300 font-semibold">generate an HTML output</span> displaying inputted contact and identification information for the project manager (PM), engineers (devs), and interns for a given project. The languages used to build this application are JavaScript, ES6, Node.js, Inquirer, TDD, and OOP.
        </>
      ),
      githubRepo: "https://github.com/garretthilberling/teamhub-generator",
      deployedUrl: "https://garretthilberling.github.io/teamhub-generator/",
      index: 3,
    },
    {
      name: <>CoinHiz</>,
      description: (
        <>
          This application was built as a team. CoinHiz is a cryptocurrency focused application where users can track price trends of top coins, the top gainers, news in the industry, percentage mined, and even see a <span className="text-sky-300 font-semibold">responsive chart</span> showing the price history of a given coin (<span className="text-sky-300 font-semibold">my feature</span>). I also handled much of the styling for this application.
        </>
      ),
      githubRepo: "https://github.com/garretthilberling/coinhiz/",
      deployedUrl: "https://garretthilberling.github.io/coinhiz/",
      index: 4,
    },
    {
      name: <>codeQuiz</>,
      description: (
        <>
          codeQuiz is an application where users engage in a <span className="text-sky-300 font-semibold">timed quiz</span> in which wrong answers deduct points from the timer and at the end you can store your name and score- the score being the <span className="text-sky-300 font-semibold"> remaining time left </span>. The languages used to build this application are HTML, CSS, and most importantly, JavaScript. The colors for the quiz are UCF themed and the highscores screen completely changes visually to a retro video game inspired scoreboard (with an 8bit outerspace background) that displays usernames and scores ranked by highest score.
        </>
      ),
      githubRepo: "https://github.com/garretthilberling/codeQuiz",
      deployedUrl: "https://garretthilberling.github.io/codeQuiz/",
      index: 5,
    },
  ]);

  return (
      <SlideFade in={name === 'projects'} offsetX={50} offsetY={0}>
        <section className="no-scrollbar 2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
          <div className="lg:hidden block flex justify-center text-lg text-sky-400 mb-3">
            <p className="animate-swipe-me"><i className="fa-solid fa-arrow-left pr-3"></i><span className="text-sky-200">Swipe</span><i className="fa-solid fa-arrow-right pl-3"></i></p>
          </div>
          <span className="lg:block md:hidden hidden">
            <LgScreenCarousel />
          </span>

          {/* scrollable carousel, small-medium screens */}
            <ul className="lg:hidden block flex overflow-scroll scroll-smooth gap-1 snap-x snap-mandatory touch-pan-x z-0 before:shrink-0 before:w-[10vw] after:shrink-0 after:w-[10vw] no-scrollbar shadow-lg">
                {projects.map((project, index) => (
                    <li className="shrink-0 snap-center w-full h-full" key={`project-card-${index}`}>
                        <div className="relative">
                            <img
                                src={require(`../../assets/img/apps/${index}.jpg`)}
                                className="md:block hidden rounded-t-lg lg:rounded-lg"
                                alt={project.name}
                            />
                            <img
                                src={require(`../../assets/img/apps/small/${index}.PNG`)}
                                className="block md:hidden rounded-t-lg lg:rounded-lg"
                                alt={project.name}
                            />

                            {/* small-medium screen caption */}
                            <div className="px-6 py-4 rounded-b-lg block lg:hidden bg-gradient-to-b from-slate-700 to-slate-600">
                              <div className={`font-bold mb-2 flex justify-between`}>
                                <h3 className="text-xl">{project.name}</h3>
                                <div className="text-lg">
                                    {smShowDescription ?
                                        <button 
                                            className="text-sky-400 hover:text-sky-500 transition-all ease-in-out duration-300"
                                            onClick={() => toggleSmShowDescription(false)}
                                        >Less</button>
                                    :
                                        <button 
                                            className="text-sky-400 hover:text-sky-500 transition-all ease-in-out duration-300"
                                            onClick={() => toggleSmShowDescription(true)}
                                        >More...</button>
                                    }
                                    </div>
                                </div>
                              {smShowDescription && <p className="text-lg transition-all ease-in-out duration-300">{project.description}</p>}
                              <div className="flex justify-center pt-6">
                                <div className="grid grid-cols-2 md:gap-10 gap-2">
                                  <div>
                                    <a className="bg-sky-50 hover:bg-slate-900 text-slate-900 hover:text-sky-50 py-2 px-3 md:text-lg text-md rounded transition-all ease-in-out duration-300" href={project.githubRepo}>Github</a>
                                  </div>
                                  <div>
                                    {
                                      index !== 1 && index !== 2 && index !== 3 ? (
                                          <a className="bg-sky-50 hover:bg-slate-900 text-slate-900 hover:text-sky-50 py-2 px-3 md:text-lg text-md rounded transition-all ease-in-out duration-300" href={project.deployedUrl}>Demo</a>
                                      ) : (
                                          <a className="bg-sky-50 hover:bg-slate-900 text-slate-900 hover:text-sky-50 py-2 px-3 md:text-lg text-md rounded transition-all ease-in-out duration-300" href={project.deployedUrl}>Tutorial</a>
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
        </section>
    </SlideFade>
  );
}

export default Projects;
