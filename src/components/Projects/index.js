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

  const [smShowDescription, toggleSmShowDescription] = useState(null)

  const [projects] = useState([
      {
          name: <>AWS-Thought</>,
          description: (
              <>
                  AWS-Thought is a <span className="text-sky-300 font-semibold">full stack AWS Cloud Application</span> where users can share their thoughts and post images. The backend API was built out with <span className="text-sky-300 font-semibold">DynamoDB</span>. Images are converted to URLs with <span className="text-sky-300 font-semibold">multer</span> and stored into an <span className="text-sky-300 font-semibold">S3 bucket</span>. The frontend is built out as a <span className="text-sky-300 font-semibold">React SPA</span> with a simple UI. The application was deployed to an <span className="text-sky-300 font-semibold">EC2 instance</span> by connecting to the SSH Client through a Virtual Machine command line, following best practices. Share your thoughts with the world with this easy-to-use application.
              </>
          ),
          githubRepo: "https://github.com/garretthilberling/aws-thought",
          deployedUrl: "http://ec2-18-223-44-201.us-east-2.compute.amazonaws.com/",
      },
      {
          name: <>Python Arcade</>,
          description: (
              <>
                  Welcome to Python Arcade! A series of algorithm-based <span className="text-sky-300 font-semibold">python</span> command line games. Begin the program by running python start.py in the root folder and select the game you would like to play. The current games offered are <span className="text-sky-300 font-semibold">Hangman</span>, <span className="text-sky-300 font-semibold">Rock Paper Scissors</span>, <span className="text-sky-300 font-semibold">Tic Tac Toe</span>, and <span className="text-sky-300 font-semibold">Minesweeper</span>, with more to come.
              </>
          ),
          githubRepo: "https://github.com/garretthilberling/python_arcade",
          deployedUrl: "https://github.com/garretthilberling/python_arcade#Usage",
      },
      {
          name: <>DogWorx BadgeMaker</>,
          description: (
              <>
                  DogWorx Badgemaker is <span className="text-sky-300 font-semibold">C#/.NET</span> application where users can input information about a team including a link to an image, and a <span className="text-sky-300 font-semibold">spreadsheet</span> with all employee information is generated as well as an <span className="text-sky-300 font-semibold">identification badge</span> with the employee's headshot. Users may enter their own employees, or if the user wishes to test the application quickly, automatically generate employees by pulling from an API. The languages, tools, and frameworks used to build this application are <span className="text-sky-300 font-semibold">C#</span>, <span className="text-sky-300 font-semibold">.NET Core</span>, <span className="text-sky-300 font-semibold">Newtonsoft.Json</span>, and <span className="text-sky-300 font-semibold">.NET graphics manipulation</span> (Bitmap, System.Drawing).
              </>
          ),
          githubRepo: "https://github.com/garretthilberling/DogWorx-BadgeMaker-csharp",
          deployedUrl: "https://github.com/garretthilberling/DogWorx-BadgeMaker-csharp#Usage",
      },
      {
          name: <>Python Newsfeed</>,
          description: (
              <>
                  Python Newsfeed is a social media application built as an implementation of a Python API. Users can create an account or login, create/edit/delete a post, and comment on/like the posts of other users. The API was built using <span className="text-sky-300 font-semibold">Python</span>, <span className="text-sky-300 font-semibold">MySQL</span>, <span className="text-sky-300 font-semibold">PyMySQL</span>, <span className="text-sky-300 font-semibold">SQLAlchemy</span> (ORM), <span className="text-sky-300 font-semibold">bcrypt</span> (password hashing), <span className="text-sky-300 font-semibold">Flask</span>, and <span className="text-sky-300 font-semibold">gunicorn</span>. It was implemented into the frontend using <span className="text-sky-300 font-semibold">Jinja2</span> for templating.
              </>
          ),
          githubRepo: "https://github.com/garretthilberling/python-newsfeed",
          deployedUrl: "https://python-tech-news-hilberling.herokuapp.com/",
      },
      {
          name: <>Tech News Java</>,
          description: (
              <>
                  Tech News Java is a social media application built as an implementation of a <span className="text-sky-300 font-semibold">Java/Spring Boot API</span>. Users can create an account or login, create/edit/delete a post, and comment on/like the posts of other users. The API was built using <span className="text-sky-300 font-semibold">Java</span>, <span className="text-sky-300 font-semibold">MySQL</span>, <span className="text-sky-300 font-semibold">Spring Boot</span>, and <span className="text-sky-300 font-semibold">Spring Data JPA</span>. It was implemented into the frontend using <span className="text-sky-300 font-semibold">Thymeleaf</span> for templating.
              </>
          ),
          githubRepo: "https://github.com/garretthilberling/tech-news-java-api",
          deployedUrl: "https://java-tech-news-hilberling.herokuapp.com/",
      },
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
      },
      {
          name: <>Plan🌎It</>,
          description: (
              <>
                  Built as a team, assumed a <span className="text-sky-300 font-semibold">leadership role</span>.
                  <br></br>
                  Plan🌎it is a user friendly organization application where you can add/update/delete goals and tasks. The idea is to take someone who may be <span className="text-sky-300 font-semibold">scatterbrained</span> and <span className="text-sky-300 font-semibold">get them organized</span>. Users can input as many ideas, goals, and tasks they would like to accomplish, specify a category, and then Plan🌎it does the hard part for them: completely organizes everything in an <span className="text-sky-300 font-semibold">easy to understand</span>, <span className="text-sky-300 font-semibold">easy to manage</span> way. I was full stack on this project, helping build out the backend with GraphQL and handling all frontend queries and mutations. I also assisted with styling. This project is still in development!
              </>
          ),
          githubRepo: "https://github.com/garretthilberling/Plan-It-Organizer",
          deployedUrl: "https://plan-it-hilberling.herokuapp.com/",
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
      },
  ]);

  return (
      <SlideFade in={name === 'projects'} offsetX={50} offsetY={0}>
        <section className="no-scrollbar 2xl:container 2xl:mx-auto 2xl:px-0 py-3 lg:px-10 md:px-5 px-2">
          <div className="lg:hidden block flex justify-center text-lg text-sky-400 mb-3">
            <p className="animate-swipe-me"><i className="fa-solid fa-arrow-left pr-3"></i><span className="text-sky-200">Swipe</span><i className="fa-solid fa-arrow-right pl-3"></i></p>
          </div>
          <span className="lg:block md:hidden hidden">
            <LgScreenCarousel />
          </span>

          {/* scrollable carousel, small-medium screens */}
            <ul className="lg:hidden block flex overflow-scroll scroll-smooth gap-3 snap-x snap-mandatory touch-pan-x z-0 before:shrink-0 before:w-[10vw] after:shrink-0 after:w-[10vw] no-scrollbar shadow-lg">
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
                                <div className="pl-1 text-lg">
                                    {smShowDescription === index ?
                                        <button 
                                            className="text-sky-400 hover:text-sky-500 transition-all ease-in-out duration-300"
                                            onClick={() => toggleSmShowDescription(null)}
                                        >Less</button>
                                    :
                                        <button 
                                            className="text-sky-400 hover:text-sky-500 transition-all ease-in-out duration-300"
                                            onClick={() => toggleSmShowDescription(index)}
                                        >More...</button>
                                    }
                                    </div>
                                </div>
                              {smShowDescription === index && <p className="text-lg transition-all ease-in-out duration-300">{project.description}</p>}
                              <div className="flex justify-center pt-6">
                                <div className="grid grid-cols-2 md:gap-10 gap-2">
                                  <div>
                                    <a className="bg-sky-50 hover:bg-slate-900 text-slate-900 hover:text-sky-50 py-2 px-3 md:text-lg text-md rounded transition-all ease-in-out duration-300" href={project.githubRepo}>Github</a>
                                  </div>
                                  <div>
                                    {
                                      index !== 1 && index !== 2 && index !== 7 && index !== 8 && index !== 9 ? (
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
