import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';
import Footer from './components/Footer';


function App() {
  const [categories] = useState([
    {
      name: 'projects'
    },
    {
      name: 'resume'
    }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  const [aboutSelected, setAboutSelected] = useState(false);

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-gray-900 to-slate-900 text-sky-50 no-scrollbar">
      <Nav 
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
      ></Nav>

      <main className="flex-grow">
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
    <Footer />
    </div>
  );
}

export default App;
