import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';


function App() {
  const [categories] = useState([
    {
      name: 'projects',
      description: "Here are the applications I have built so far, including some group projects."
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
    <div className="h-screen bg-gradient-to-b from-gray-900 to-stone-900 text-sky-50">
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
              <Portfolio
                currentCategory={currentCategory}
              ></Portfolio>
            </>
          ) : aboutSelected && !contactSelected ? (
            <About aboutSelected={aboutSelected}></About>
          ) : (
            <ContactForm></ContactForm>
          )
        }
        </div>
      </main>
    </div>
  );
}

export default App;
