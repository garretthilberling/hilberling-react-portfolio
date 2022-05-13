import React from 'react';
import Resume from '../Resume';
import Projects from '../Projects';

function Portfolio ({ currentCategory }) {
  const { name } = currentCategory;

  return(
      <section>
          {name === 'resume' ? (
              <>
                <Resume
                  name={name}
                ></Resume>
              </>
          ) : (
              <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
                <Projects
                  name={name}
                ></Projects>
              </div>
          )
        }
      </section>
  )
}

export default Portfolio;