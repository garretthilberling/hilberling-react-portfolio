import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faDatabase, faDog } from '@fortawesome/free-solid-svg-icons'
import { faSmile, faCalendarTimes } from '@fortawesome/free-regular-svg-icons'
import { Image, SlideFade, ScaleFade } from '@chakra-ui/react'


function About({ aboutSelected }) {
    return (
        <section className="grid lg:grid-cols-2 grid-row-2 justify-center justify-items-center">
            <ScaleFade initialScale={0.6} in={aboutSelected}>
                <Image 
                    src={require("../../assets/img/profile-pic/profile-pic.jpg")} 
                    alt="Profile Pic" 
                    className="float-left shadow-2xl shadow-slate-700"  
                    boxSize={{ base: '300px', md: '350px', lg: '500px', xl: '600px' }}
                    objectFit="cover"
                    borderRadius="full"
                />
            </ScaleFade>

            <ul>
                <SlideFade in={aboutSelected} offsetX={0} offsetY={-20}>
                    <li className="py-6 pr-3 flex">
                        <div className="flex flex-col justify-center pr-6 text-3xl text-blue-300"><FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon></div>
                        <p>I am a marketing student turned full stack software developer. I am currently based out of <span className="text-sky-300 font-semibold">Orlando<span className="text-sky-50 font-normal">,</span> Florida</span> and am currently looking to relocate to <span className="text-sky-300 font-semibold">Seattle<span className="text-sky-50 font-normal">,</span> Washington</span> for my first role. </p> 
                    </li>
                </SlideFade>
                <SlideFade in={aboutSelected} offsetX={0} offsetY={-40}>
                    <li className="py-6 pr-3 flex">
                        <div className="flex flex-col justify-center pr-6 text-4xl text-blue-300"><FontAwesomeIcon icon={faSmile}></FontAwesomeIcon></div>
                        <p>My passion is creating apps through the <span className="text-sky-300 font-semibold">perspective of the user</span>.  I love creating logic users can interact with directly using JavaScript. My favorite part about developing software is creating an <span className="text-sky-300 font-semibold">experience</span> for the user.</p> 
                    </li>
                </SlideFade>
                <SlideFade in={aboutSelected} offsetX={0} offsetY={-60}>
                    <li className="py-6 pr-3 flex">
                        <div className="flex flex-col justify-center pr-6 text-4xl text-blue-300"><FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon></div>
                        <p>I really enjoy working with <span className="text-sky-300 font-semibold">databases</span>, and have experience with <span className="text-sky-300 font-semibold">mySQL</span>, <span className="text-sky-300 font-semibold">MongoDB/Mongoose</span>, and <span className="text-sky-300 font-semibold">GraphQL</span>. A well structured <span className="text-sky-300 font-semibold">database architecture</span> that is constructed for optimal performance is key and is just as valuable to the user's experience.</p>
                    </li>
                </SlideFade>
                <SlideFade in={aboutSelected} offsetX={0} offsetY={-80}>
                    <li className="py-6 pr-3 flex">
                        <div className="flex flex-col justify-center pr-6 text-4xl text-blue-300"><FontAwesomeIcon icon={faCalendarTimes}></FontAwesomeIcon></div> 
                        <p>I <span className="text-sky-300 font-semibold">love</span> learning about new languages and technologies. After I am finished with my bootcamp I intend to learn <span className="text-sky-300 font-semibold">C++</span>, <span className="text-sky-300 font-semibold">C#</span>, and <span className="text-sky-300 font-semibold">the .NET framwork</span>.</p>
                    </li>
                </SlideFade> 
                <SlideFade in={aboutSelected} offsetX={0} offsetY={-100}>
                    <li className="py-6 pr-3 flex">
                        <div className="flex flex-col justify-center pr-6 text-4xl text-blue-300"><FontAwesomeIcon icon={faDog}></FontAwesomeIcon></div> 
                        <p>I am a huge fan of <span className="text-sky-300 font-semibold">puppies</span>. It's so bad I even <span className="text-sky-300 font-semibold">led a team</span> in designing an entire application dedicated to them!!</p>
                    </li>
                </SlideFade>
            </ul>
        </section>
    )
}

export default About;