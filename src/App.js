import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';


function App() {
  const [categories] = useState([
    {
      name: 'projects',
      description: "Take a look at my work!"
    },
    {
      name: 'resume',
      description: 'Here is my resume!'
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  const [aboutSelected, setAboutSelected] = useState(false);

  return (
    <div className="h-screen flex flex-col bg-gradient-to-b from-gray-900 to-stone-900 text-sky-50">
      <Nav 
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
      ></Nav>

      <main>
        <div>
          {!contactSelected && !aboutSelected ? (
            <>
              <Projects
                currentCategory={currentCategory}
              ></Projects>
            </>
          ) : aboutSelected && !contactSelected ? (
            <About></About>
          ) : (
            <Contact></Contact>
          )
        }
        </div>
      </main>
    </div>
  );
}

export default App;
