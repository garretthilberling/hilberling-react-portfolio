import React, { useState } from 'react';
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
              <>
                <Projects
                  name={name}
                  description={description}
                ></Projects>
              </>
          )
        }
      </section>
  )
}

export default Portfolio;