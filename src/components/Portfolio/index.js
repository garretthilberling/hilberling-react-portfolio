import React from 'react';
import Resume from '../Resume';
import Projects from '../Projects';

function Portfolio ({ currentCategory }) {
  const { name, description } = currentCategory;

  return(
      <section>
          {name === 'resume' ? (
              <>
                <Resume
                  name={name}
                  description={description}
                ></Resume>
              </>
          ) : (
              <div className="2xl:container 2xl:mx-auto 2xl:px-0 py-3 px-10">
                <Projects
                  name={name}
                  description={description}
                ></Projects>
              </div>
          )
        }
      </section>
  )
}

export default Portfolio;