import React from 'react';
import { capitalizeFirstLetter }from '../../utils/helpers';


function Nav(props) {
    document.title = 'Garrett Hilberling'
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected,
        aboutSelected,
        setAboutSelected
    } = props;


    return (
        <header className="p-5 py-10 mx-auto">
            <div className="flex items-center justify-center mb-2">
                <h2><a data-testid="link" href="/" className="md:text-4xl text-3xl text-sky-400">Garrett Hilberling</a></h2>
            </div>
            <nav className="flex items-center justify-center">
                <ul className="flex flex-row md:text-xl text-lg">
                    <li className="md:mx-3 mx-2">
                        <a data-testid="about" className={`hover:text-sky-200 ${
                            aboutSelected && !contactSelected && 'text-amber-200 hover:text-amber-300'
                            }`} href="#about" onClick={() => { setContactSelected(false); setAboutSelected(true);}}>About<span className="hidden 2xl:contents xl:contents lg:contents md:contents"> Me</span></a>
                    </li>
                {categories.map(category => (
                    <li
                    className="md:mx-3 mx-2"
                    key={category.name}
                    >
                    <a   
                        className={`hover:text-sky-200 ${
                            currentCategory.name === category.name && !contactSelected && !aboutSelected && 'text-amber-200 hover:text-amber-300'
                            }`}
                        href={`#${category.name}`}
                        onClick={() => {
                        setCurrentCategory(category)
                        setContactSelected(false);
                        setAboutSelected(false);
                        }}
                    >
                    {capitalizeFirstLetter(category.name)}
                    </a>
                    </li>
                ))}
                    <li className="md:mx-3 mx-2">
                        <a className={`hover:text-sky-200 ${contactSelected && 'text-amber-200 hover:text-amber-300'}`} href="#contact" onClick={() => { setContactSelected(true); setAboutSelected(false); }}>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav;