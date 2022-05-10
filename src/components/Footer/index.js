import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LinkedinOutlined, GithubOutlined } from '@ant-design/icons';

function Footer() {
   return (
      //  <h1 className="footer-lines">Testtttt123</h1>
       <footer className="mt-auto">
        <h1 className="footer-lines">
                <a className="hover:text-sky-200" style={{ fontSize: '52px', padding: '10px'  }} href="https://www.linkedin.com/in/garretthilberling/">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a className="hover:text-sky-200" style={{ fontSize: '52px', padding: '10px'  }} href="https://github.com/garretthilberling">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a className="hover:text-sky-200" href="https://stackoverflow.com/users/17630334/garretthilberling">
                    <i className="fa-brands fa-stack-overflow" style={{ fontSize: '52px', padding: '10px'  }}></i>
                </a>
            </h1>
        </footer>
   ) 
}

export default Footer