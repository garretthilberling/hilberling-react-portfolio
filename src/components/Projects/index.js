import React, { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { SlideFade } from "@chakra-ui/react";

function Projects({ name }) {
  const paw = (
    <FontAwesomeIcon
      icon={faPaw}
      className="px-1 text-violet-400"
    ></FontAwesomeIcon>
  );
  let carousel = useRef(null);
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselRef, setCarouselRef] = useState(0);
  const [showDescription, toggleShowDescription] = useState(true)
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

  const moveNext = () => {
      console.log(currentIndex + 1);
      console.log(carouselRef)
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

  // useEffect(() => {
  //   JSON.stringify(changeUrl);
  //   console.log(JSON.stringify(changeUrl));
  //   console.log()
  // }, [changeUrl]);

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      console.log(maxScrollWidth, carousel.current.scrollLeft);

      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;

      console.log(maxScrollWidth, carousel.current.scrollLeft);
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  // useEffect(() => {
  //   setCarouselRef(carousel);
  // }, [carousel.current])

  
  

  return (
      <SlideFade in={name === 'projects'} offsetX={50} offsetY={0}>
        <section className="no-scrollbar 2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
          <div className="lg:hidden block flex justify-center text-lg text-sky-400 mb-3">
            <p className="animate-swipe-me"><i className="fa-solid fa-arrow-left pr-3"></i><span className="text-sky-200">Swipe</span><i className="fa-solid fa-arrow-right pl-3"></i></p>
          </div>
            <ul ref={carousel} id="carousel-container" className="flex overflow-scroll scroll-smooth lg:gap-6 md:gap-3 gap-1 snap-x snap-mandatory touch-pan-x z-0 before:shrink-0 lg:before:w-[30vw] md:before:w-[15vw] before:w-[10vw] after:shrink-0 lg:after:w-[30vw] md:after:w-[15vw] after:w-[10vw] no-scrollbar shadow-lg">
                {projects.map((project, index) => (
                    <li className="shrink-0 snap-center lg:w-auto w-full h-full" key={`project-card-${index}`}>
                        <div className="relative">
                            <img
                                id={`carousel-item-${index}`}
                                src={require(`../../assets/img/apps/${index}.jpg`)}
                                className="block rounded-t-lg lg:rounded-lg"
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
                                <div className="grid grid-cols-2 gap-10">
                                  <div>
                                    <a className="bg-sky-50 hover:bg-slate-900 text-slate-900 hover:text-sky-50 py-2 px-3 text-lg rounded transition-all ease-in-out duration-300" href={project.githubRepo}>Github Repo</a>
                                  </div>
                                  <div>
                                    {
                                      index !== 1 && index !== 2 && index !== 3 ? (
                                          <a className="bg-sky-50 hover:bg-slate-900 text-slate-900 hover:text-sky-50 py-2 px-3 text-lg rounded transition-all ease-in-out duration-300" href={project.deployedUrl}>Try it out!</a>
                                      ) : (
                                          <a className="bg-sky-50 hover:bg-slate-900 text-slate-900 hover:text-sky-50 py-2 px-3 text-lg rounded transition-all ease-in-out duration-300" href={project.deployedUrl}>Video Demo</a>
                                      )
                                    }
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* large screen caption */}
                            <div className={`carousel-caption hidden lg:block absolute bg-slate-900 bg-opacity-70 hover:bg-opacity-95 ${!showDescription && 'opacity-0 hover:opacity-80'} transition-all ease-in-out duration-300 px-3 rounded`}>
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
                className="lg:block hidden hover:bg-sky-100/75 text-sky-50 hover:text-slate-900 w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300 text-center absolute top-0 bottom-0 border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
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
                    className="lg:block hidden hover:bg-sky-100/75 text-sky-50 hover:text-slate-900 w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300 absolute top-0 bottom-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
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
                      <div key={`nav-container-${index}`}>
                        <li className="block lg:hidden">
                          <div className="bg-slate-200">

                          </div>
                        </li>

                        <li>
                            <a 
                                href={`#carousel-item-${index}`} 
                                className=" transition-all scroll-smooth duration-300 hidden lg:block hover:text-sky-200"
                            >{project.name}</a>
                        </li>
                      </div>
                    ))}
                </ul>
            </nav>
        </section>
    </SlideFade>
  );
}

export default Projects;