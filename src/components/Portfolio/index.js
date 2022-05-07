import React, { useState } from 'react';
import Resume from '../Resume';
import { projectArr } from '../../utils/myProjects'


function Portfolio ({ currentCategory }) {
  const [projectList] = useState(projectArr);
  const { name, description } = currentCategory;

  return(
      <section>
          {name === 'resume' ? (
              <>
                <Resume></Resume>
              </>
          ) : (
              <>

              </>
          )
        }
      </section>
  )
}

export default Portfolio;