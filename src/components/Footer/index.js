import React from 'react';

function Footer() {
   return (
       <footer className="mt-auto bottom-0">
        <h1 className="footer-lines">
                <a className="hover:text-sky-200 transition-all ease-in-out duration-300" style={{ fontSize: '52px', padding: '10px'  }} href="https://www.linkedin.com/in/garretthilberling/">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a className="hover:text-sky-200 transition-all ease-in-out duration-300" style={{ fontSize: '52px', padding: '10px'  }} href="https://github.com/garretthilberling">
                  <i className="fa-brands fa-github"></i>
                </a>
                <a className="hover:text-sky-200 transition-all ease-in-out duration-300" href="https://stackoverflow.com/users/17630334/garretthilberling">
                    <i className="fa-brands fa-stack-overflow" style={{ fontSize: '52px', padding: '10px'  }}></i>
                </a>
            </h1>
        </footer>
   ) 
}

export default Footer