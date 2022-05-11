import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faDatabase, faPaw } from '@fortawesome/free-solid-svg-icons'
import { faSmile, faCalendarTimes } from '@fortawesome/free-regular-svg-icons'
import { Image, SlideFade } from '@chakra-ui/react'


function About({ aboutSelected }) {
    const [aboutListItems] = useState([
        {
            icon: faCoffee,
            point: 
            <>
                I am a marketing student turned full stack software developer, soon to be finished with the <span className="text-sky-300 font-semibold">UCF Coding Bootcamp</span> in <span className="text-teal-400 font-semibold">June 2022</span>. I am currently based out of <span className="text-sky-300 font-semibold">Orlando<span className="text-sky-50 font-normal">,</span> Florida</span> and am currently looking to relocate to <span className="text-sky-300 font-semibold">Seattle<span className="text-sky-50 font-normal">,</span> Washington</span> for my first role.
            </>,
            transition: -20
        },
        {
            icon: faSmile,
            point: 
            <>
                <p>My passion is creating apps through the <span className="text-sky-300 font-semibold">perspective of the user</span>.  I love creating logic users can interact with directly using JavaScript. My favorite part about developing software is creating an <span className="text-sky-300 font-semibold">experience</span> for the user.</p> 
            </>,
            transition: -40
        },
        {
            icon: faDatabase,
            point:
            <>
                <p>I really enjoy working with <span className="text-sky-300 font-semibold">databases</span>, and have experience with <span className="text-sky-300 font-semibold">mySQL</span>, <span className="text-sky-300 font-semibold">MongoDB/Mongoose</span>, and <span className="text-sky-300 font-semibold">GraphQL</span>. A well structured <span className="text-sky-300 font-semibold">database architecture</span> that is constructed for optimal performance is just as essential for a satisfying user experience as visual aesthetics.</p>
            </>,
            transition: -60
        },
        {
            icon: faCalendarTimes,
            point: 
            <>
              <p>I <span className="text-sky-300 font-semibold">love</span> learning about new languages and technologies. After I am finished with my bootcamp I intend to learn <span className="text-sky-300 font-semibold">C++</span>, <span className="text-sky-300 font-semibold">C#</span>, and <span className="text-sky-300 font-semibold">the .NET framwork</span>.</p> 
            </>,
            transition: -80
        },
        {
            icon: faPaw,
            point:
            <>
               <p>I am a huge fan of <span className="text-sky-300 font-semibold">puppies</span>. It's so bad I even <span className="text-sky-300 font-semibold">led a team</span> in designing an entire application dedicated to them!!</p>
            </>,
            transition: -100
        }
    ]);

    return (
            <section className="grid lg:grid-cols-2 grid-row-2 justify-center justify-items-center">
                <SlideFade offsetX={-100} offsetY={0} in={aboutSelected} >
                    <Image 
                        src={require("../../assets/img/profile-pic/profile-pic.png")} 
                        alt="Profile Pic" 
                        className="float-left shadow-2xl shadow-slate-700 bg-transparent"  
                        boxSize={{ base: '300px', md: '350px', lg: '500px' }}
                        objectFit="cover"
                        borderRadius="full"
                    />
                </SlideFade>
                <ul className="lg:pl-0 lg:pr-10 px-5 bg-transparent">
                {aboutListItems.map((listItem, index) => (
                    <SlideFade in={aboutSelected} offsetX={0} offsetY={listItem.transition}>
                            <li key={`about-me-${index}`} className="py-6 pr-3 flex bg-transparent">
                                <div className="flex flex-col justify-center pr-6 text-3xl text-blue-300 bg-transparent">
                                    <FontAwesomeIcon icon={listItem.icon}></FontAwesomeIcon>
                                </div>
                                <p>{listItem.point}</p> 
                            </li>
                    </SlideFade>
                ))}
                </ul>
            </section>
    )
}

export default About;