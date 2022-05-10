import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { SlideFade } from "@chakra-ui/react";

function Projects({ name, description }) {
  const paw = (
    <FontAwesomeIcon
      icon={faPaw}
      className="px-1 text-violet-400"
    ></FontAwesomeIcon>
  );
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);
  const [showDescription, toggleShowDescription] = useState(true)

  const [projects] = useState([
    {
      name: <>Pet{paw}Fetcher</>,
      description: (
        <>
          Built as a team, assumed a <span className="text-sky-300 font-semibold">leadership role</span>.
          <br></br>
          Pet{paw}Fetcher is an application where users can list their puppies
          for adoption or connect with other users to adopt a pet of their own.
          Users can like and comment on posts and can list their pet, including
          <span className="text-sky-300 font-semibold">uploading an image file</span>. This is done by converting the image into a <span className="text-sky-300 font-semibold">data url</span> and storing it
          in the database as a <span className="text-sky-300 font-semibold">string</span>.
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
          for a <span className="text-sky-300 font-semibold">social networking website</span>. Create a user, add a user as a friend, share your thoughts, and react to the thoughts of other users! The languages and technologies
          used to build this application are: JavaScript, ES6, MongoDB, and
          Mongoose.
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

  const moveNext = () => {
      console.log(currentIndex + 1);
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const movePrev = () => {
    console.log(currentIndex - 1);
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
      <SlideFade in={name === 'projects'} offsetX={50} offsetY={0}>
        <section className="no-scrollbar">
            <ul ref={carousel} className="flex overflow-scroll scroll-smooth lg:gap-6 md:gap-3 gap-1 snap-x snap-mandatory before:shrink-0 lg:before:w-[30vw] md:before:w-[15vw] before:w-[10vw] after:shrink-0 after:w-[30vw] no-scrollbar">
                {projects.map((project, index) => (
                    <li className="shrink-0 snap-center" key={`project-${index}`}>
                        <div className="relative">
                            <img
                                id={`carousel-item-${index}`}
                                src={require(`../../assets/img/apps/${index}.jpg`)}
                                className="block"
                                alt={project.name}
                            />
                            <div className={`carousel-caption hidden md:block absolute bg-slate-900 bg-opacity-70 hover:bg-opacity-95 ${!showDescription && 'opacity-0 hover:opacity-80'} transition-all ease-in-out duration-300 px-3 rounded`}>
                                <div className="flex justify-end pr-4">
                                {showDescription ?
                                    <button 
                                        className="hover:text-sky-200 transition-all ease-in-out duration-300"
                                        onClick={() => toggleShowDescription(false)}
                                    >Hide Description</button>
                                :
                                    <button 
                                        className="hover:text-sky-200 transition-all ease-in-out duration-300"
                                        onClick={() => toggleShowDescription(true)}
                                    >Show Description</button>
                                }
                                </div>
                                <h5 className="text-3xl text-center">{project.name}</h5>
                                {showDescription && <p className="pt-2 text-center">{project.description}</p> }
                                
                                <div className="flex justify-center pt-3">
                                    <div className="grid grid-cols-2">
                                        <div>
                                            <a className="bg-slate-900 hover:bg-sky-50 hover:text-slate-900 py-1 px-2 rounded  transition-all ease-in-out duration-300" href={project.githubRepo}>Github Repo</a>
                                        </div>
                                        <div>
                                            {
                                                index !== 1 && index !== 2 && index !== 3 ? (
                                                    <a className="bg-slate-900 hover:bg-sky-50 hover:text-slate-900 py-1 px-2 rounded transition-all ease-in-out duration-300" href={project.deployedUrl}>Try it for yourself!</a>
                                                ) : (
                                                    <a className="bg-slate-900 hover:bg-sky-50 hover:text-slate-900 py-1 px-2 rounded transition-all ease-in-out duration-300" href={project.deployedUrl}>Video Demonstration</a>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
                <button
                onClick={movePrev}
                className="hover:bg-sky-100/75 text-sky-50 hover:text-slate-900 w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300 text-center absolute top-0 bottom-0 border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                disabled={isDisabled("prev")}
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-20 -ml-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                    />
                    </svg>
                    <span className="sr-only">Prev</span>
                </button>
                <button
                    onClick={moveNext}
                    className="hover:bg-sky-100/75 text-sky-50 hover:text-slate-900 w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300 absolute top-0 bottom-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    disabled={isDisabled("next")}
                >
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-20 -ml-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                    />
                    </svg>
                    <span className="sr-only">Next</span>
                </button>
            </ul>
            <nav className="flex justify-center py-5">
                <ul className="grid grid-cols-2">
                    {projects.map((project, index) => (
                        <li key={`snap-to-${index}`}>
                            <a 
                                href={`#carousel-item-${index}`} 
                                className=" transition-all scroll-smooth duration-300 sm:hidden lg:block hover:text-sky-200"
                            >{project.name}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    </SlideFade>
  );
}

export default Projects;
