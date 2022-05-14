import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

function LgScreenCarousel() {
  const paw = (
    <FontAwesomeIcon
      icon={faPaw}
      className="px-1 text-violet-400"
    ></FontAwesomeIcon>
  );
  const [projects] = useState([
    {
      name: <>Pet{paw}Fetcher</>,
      description: (
        <>
          <div className="pf-team">(Built as a team, assumed a{" "}
          <span className="text-sky-300 font-semibold">leadership role)</span>.</div>
          Pet{paw}Fetcher is an application where users can list their puppies
          for adoption or connect with other users to adopt a pet of their own.
          Users can like and comment on posts and can list their pet, including{" "}
          <span className="text-sky-300 font-semibold">
            uploading an image file
          </span>
          . This is done by converting the image into a{" "}
          <span className="text-sky-300 font-semibold">data url</span> and
          storing it in the database as a{" "}
          <span className="text-sky-300 font-semibold">string</span> (one of my
          contributions).
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
          for a{" "}
          <span className="text-sky-300 font-semibold">
            social networking website
          </span>
          . Create a user, add a user as a friend, share your thoughts, and
          react to the thoughts of other users! The languages and technologies
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
          E-T is an application designed to help clients manage a{" "}
          <span className="text-sky-300 font-semibold">
            database of employees and managers{" "}
          </span>
          . The languages and technologies used to build this application are
          JavaScript, ES6, Node.js, Inquirer, MySQL, and Console.Table.
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
          TH-G is an application designed to help clients{" "}
          <span className="text-sky-300 font-semibold">
            generate an HTML output
          </span>{" "}
          displaying inputted contact and identification information for the
          project manager (PM), engineers (devs), and interns for a given
          project. The languages used to build this application are JavaScript,
          ES6, Node.js, Inquirer, TDD, and OOP.
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
          This application was built as a team. CoinHiz is a cryptocurrency
          focused application where users can track price trends of top coins,
          the top gainers, news in the industry, percentage mined, and even see
          a <span className="text-sky-300 font-semibold">responsive chart</span>{" "}
          showing the price history of a given coin (
          <span className="text-sky-300 font-semibold">my feature</span>). I
          also handled much of the styling for this application.
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
          codeQuiz is an application where users engage in a{" "}
          <span className="text-sky-300 font-semibold">timed quiz</span> in
          which wrong answers deduct points from the timer and at the end you
          can store your name and score- the score being the{" "}
          <span className="text-sky-300 font-semibold">
            {" "}
            remaining time left{" "}
          </span>
          . The languages used to build this application are HTML, CSS, and most
          importantly, JavaScript. The colors for the quiz are UCF themed and
          the highscores screen completely changes visually to a retro video
          game inspired scoreboard (with an 8bit outerspace background) that
          displays usernames and scores ranked by highest score.
        </>
      ),
      githubRepo: "https://github.com/garretthilberling/codeQuiz",
      deployedUrl: "https://garretthilberling.github.io/codeQuiz/",
      index: 5,
    },
  ]);

  const [showDescription, toggleShowDescription] = useState(true);

  return (
      <Carousel>
        <div className="relative">
            <img
              src={require(`../../assets/img/apps/${0}.jpg`)}
              className="block rounded-t-lg lg:rounded-lg"
              alt="pet-fetcher"
            />
            <div className="legend lg-carousel">
                <div className="more-less">
                  {showDescription ? (
                      <button
                        className="text-lg text-sky-400 hover:text-sky-500 transition-all ease-in-out duration-300 text-lg"
                        onClick={() => toggleShowDescription(false)}
                      >
                        show less
                      </button>
                  ) : (
                      <button
                        className="text-lg text-sky-400 hover:text-sky-500 transition-all ease-in-out duration-300"
                        onClick={() => toggleShowDescription(true)}
                      >
                        more...
                      </button>
                  )}
                </div>
              <h5 className="text-3xl text-center">{projects[0].name}</h5>
                <p className={`pt-2 text-center text-lg desc-align ${showDescription ? 'block' : 'hidden'}`}>{projects[0].description}</p>

              <div className="flex justify-center pt-3 pl-3 text-lg">
                <div className="grid grid-cols-2">
                  <div>
                    <a
                      className="bg-slate-900 hover:bg-sky-50 hover:text-slate-900 py-1 px-2 rounded  transition-all ease-in-out duration-300"
                      href={projects[0].githubRepo}
                    >
                      Github Repo
                    </a>
                  </div>
                  <div>
                    <a
                      className="bg-slate-900 hover:bg-sky-50 hover:text-slate-900 py-1 px-2 rounded transition-all ease-in-out duration-300"
                      href={projects[0].deployedUrl}
                    >
                      Try it for yourself!
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className="relative">
            <img
              src={require(`../../assets/img/apps/${1}.jpg`)}
              className="block rounded-t-lg lg:rounded-lg"
              alt="pet-fetcher"
            />
            <div className="legend lg-carousel">
                <div className="more-less">
                  {showDescription ? (
                      <button
                        className="text-lg text-sky-400 hover:text-sky-500 transition-all ease-in-out duration-300 text-lg"
                        onClick={() => toggleShowDescription(false)}
                      >
                        show less
                      </button>
                  ) : (
                      <button
                        className="text-lg text-sky-400 hover:text-sky-500 transition-all ease-in-out duration-300"
                        onClick={() => toggleShowDescription(true)}
                      >
                        more...
                      </button>
                  )}
                </div>
              <h5 className="text-3xl text-center">{projects[1].name}</h5>
                <p className={`pt-2 text-center text-lg desc-align ${showDescription ? 'block' : 'hidden'}`}>{projects[1].description}</p>

              <div className="flex justify-center pt-3 pl-3 text-lg">
                <div className="grid grid-cols-2">
                  <div>
                    <a
                      className="bg-slate-900 hover:bg-sky-50 hover:text-slate-900 py-1 px-2 rounded  transition-all ease-in-out duration-300"
                      href={projects[1].githubRepo}
                    >
                      Github Repo
                    </a>
                  </div>
                  <div>
                    <a
                      className="bg-slate-900 hover:bg-sky-50 hover:text-slate-900 py-1 px-2 rounded transition-all ease-in-out duration-300"
                      href={projects[1].deployedUrl}
                    >
                      Video Demonstration
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className="relative">
            <img
              src={require(`../../assets/img/apps/${2}.jpg`)}
              className="block rounded-t-lg lg:rounded-lg"
              alt="pet-fetcher"
            />
            <div className="legend lg-carousel">
                <div className="more-less">
                  {showDescription ? (
                      <button
                        className="text-lg text-sky-400 hover:text-sky-500 transition-all ease-in-out duration-300 text-lg"
                        onClick={() => toggleShowDescription(false)}
                      >
                        show less
                      </button>
                  ) : (
                      <button
                        className="text-lg text-sky-400 hover:text-sky-500 transition-all ease-in-out duration-300"
                        onClick={() => toggleShowDescription(true)}
                      >
                        more...
                      </button>
                  )}
                </div>
              <h5 className="text-3xl text-center">{projects[2].name}</h5>
                <p className={`pt-2 text-center text-lg desc-align ${showDescription ? 'block' : 'hidden'}`}>{projects[2].description}</p>

              <div className="flex justify-center pt-3 pl-3 text-lg">
                <div className="grid grid-cols-2">
                  <div>
                    <a
                      className="bg-slate-900 hover:bg-sky-50 hover:text-slate-900 py-1 px-2 rounded  transition-all ease-in-out duration-300"
                      href={projects[2].githubRepo}
                    >
                      Github Repo
                    </a>
                  </div>
                  <div>
                    <a
                      className="bg-slate-900 hover:bg-sky-50 hover:text-slate-900 py-1 px-2 rounded transition-all ease-in-out duration-300"
                      href={projects[2].deployedUrl}
                    >
                      Video Demonstration
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className="relative">
            <img
              src={require(`../../assets/img/apps/${3}.jpg`)}
              className="block rounded-t-lg lg:rounded-lg"
              alt="pet-fetcher"
            />
            <div className="legend lg-carousel">
                <div className="more-less">
                  {showDescription ? (
                      <button
                        className="text-lg text-sky-400 hover:text-sky-500 transition-all ease-in-out duration-300 text-lg"
                        onClick={() => toggleShowDescription(false)}
                      >
                        show less
                      </button>
                  ) : (
                      <button
                        className="text-lg text-sky-400 hover:text-sky-500 transition-all ease-in-out duration-300"
                        onClick={() => toggleShowDescription(true)}
                      >
                        more...
                      </button>
                  )}
                </div>
              <h5 className="text-3xl text-center">{projects[3].name}</h5>
                <p className={`pt-2 text-center text-lg desc-align ${showDescription ? 'block' : 'hidden'}`}>{projects[3].description}</p>

              <div className="flex justify-center pt-3 pl-3 text-lg">
                <div className="grid grid-cols-2">
                  <div>
                    <a
                      className="bg-slate-900 hover:bg-sky-50 hover:text-slate-900 py-1 px-2 rounded  transition-all ease-in-out duration-300"
                      href={projects[3].githubRepo}
                    >
                      Github Repo
                    </a>
                  </div>
                  <div>
                    <a
                      className="bg-slate-900 hover:bg-sky-50 hover:text-slate-900 py-1 px-2 rounded transition-all ease-in-out duration-300"
                      href={projects[3].deployedUrl}
                    >
                      Video Demonstration
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className="relative">
            <img
              src={require(`../../assets/img/apps/${4}.jpg`)}
              className="block rounded-t-lg lg:rounded-lg"
              alt="pet-fetcher"
            />
            <div className="legend lg-carousel">
                <div className="more-less">
                  {showDescription ? (
                      <button
                        className="text-lg text-sky-400 hover:text-sky-500 transition-all ease-in-out duration-300 text-lg"
                        onClick={() => toggleShowDescription(false)}
                      >
                        show less
                      </button>
                  ) : (
                      <button
                        className="text-lg text-sky-400 hover:text-sky-500 transition-all ease-in-out duration-300"
                        onClick={() => toggleShowDescription(true)}
                      >
                        more...
                      </button>
                  )}
                </div>
              <h5 className="text-3xl text-center">{projects[4].name}</h5>
                <p className={`pt-2 text-center text-lg desc-align ${showDescription ? 'block' : 'hidden'}`}>{projects[4].description}</p>

              <div className="flex justify-center pt-3 pl-3 text-lg">
                <div className="grid grid-cols-2">
                  <div>
                    <a
                      className="bg-slate-900 hover:bg-sky-50 hover:text-slate-900 py-1 px-2 rounded  transition-all ease-in-out duration-300"
                      href={projects[4].githubRepo}
                    >
                      Github Repo
                    </a>
                  </div>
                  <div>
                    <a
                      className="bg-slate-900 hover:bg-sky-50 hover:text-slate-900 py-1 px-2 rounded transition-all ease-in-out duration-300"
                      href={projects[4].deployedUrl}
                    >
                      Try it for yourself!
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>

        <div className="relative">
            <img
              src={require(`../../assets/img/apps/${5}.jpg`)}
              className="block rounded-t-lg lg:rounded-lg"
              alt="pet-fetcher"
            />
            <div className="legend lg-carousel">
                <div className="more-less">
                  {showDescription ? (
                      <button
                        className="text-lg text-sky-400 hover:text-sky-500 transition-all ease-in-out duration-300 text-lg"
                        onClick={() => toggleShowDescription(false)}
                      >
                        show less
                      </button>
                  ) : (
                      <button
                        className="text-lg text-sky-400 hover:text-sky-500 transition-all ease-in-out duration-300"
                        onClick={() => toggleShowDescription(true)}
                      >
                        more...
                      </button>
                  )}
                </div>
              <h5 className="text-3xl text-center">{projects[5].name}</h5>
                <p className={`pt-2 text-center text-lg desc-align ${showDescription ? 'block' : 'hidden'}`}>{projects[5].description}</p>

              <div className="flex justify-center pt-3 pl-3 text-lg">
                <div className="grid grid-cols-2">
                  <div>
                    <a
                      className="bg-slate-900 hover:bg-sky-50 hover:text-slate-900 py-1 px-2 rounded  transition-all ease-in-out duration-300"
                      href={projects[5].githubRepo}
                    >
                      Github Repo
                    </a>
                  </div>
                  <div>
                    <a
                      className="bg-slate-900 hover:bg-sky-50 hover:text-slate-900 py-1 px-2 rounded transition-all ease-in-out duration-300"
                      href={projects[5].deployedUrl}
                    >
                      Try it for yourself!
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </Carousel>
  );
}

export default LgScreenCarousel;
