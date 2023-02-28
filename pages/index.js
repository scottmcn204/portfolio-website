import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import{AiFillLinkedin} from 'react-icons/ai';
import Image from "next/image";
import myIcon from "/public/myIcon.png";
import flashcards from "/public/flashcards.png";
import helphome from "/public/help@home.png";
import portfolio from "/public/portfolio.jpeg";
import rally from "/public/rally.png";
import swift from "/public/swift.png";
import java from "/public/java.png";
import web from "/public/web.png"
import python from "/public/python.png";
import netsoc from "/public/netsoc.png"
import scrybble from "/public/scrybble.jpg"
import { use, useState } from 'react';
import {useRef} from 'react';
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const ref = useRef(null);
  const ref2 = useRef(null);
  const handleClick = () => {
    ref?.current.scrollIntoView({behavior: 'smooth'});
  };
  const handleClick2 = () => {
    ref2?.current.scrollIntoView({behavior: 'smooth'});
  };
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [visible0, setVisible0] = useState(false);
  const [visible5, setVisible5] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Scott McNally</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <link rel="icon" href="/favicon.ico" />
        

      </Head>
      <main className='bg-white px-10 mx-auto md:px-20 lg:px-40 dark:bg-gray-700 transition-colors duration-700 h-full'>
        <section className = "min-h-screen">
          <nav className='flex justify-between py-10 mb-5'>
            <h1 className='text-lg md:text-xl font-burtons dark:text-white'>Scott McNally</h1>
            <ul className='flex items-center'>
              <li className=' cursor-pointer text-white bg-gradient-to-r from-cyan-500 to-teal-500 p-2 rounded-full text-base md:text-xl'><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)}/></li>
              <li className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-4 text-xs md:text-base'><a href="https://drive.google.com/file/d/1ZyPODI2H4e-KfUuDGGd2wfaxanPSfLCJ/view?usp=sharing">Resume</a></li>
            </ul>
          </nav>
          <div className='relative mx-auto w-40 h-40 bg-gradient-to-b from-gray-300 to-teal-300 rounded-full shadow-2xl md:h-64 md:w-64 animate-appearfade'>
            <Image src={myIcon} className='rounded-full h-full w-full object-cover object-center border-transparent border-4' alt="image"/>
          </div>
          <div className='text-center pb-10 pt-5'>
            <h2 className='font-extrabold text-transparent text-4xl md:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 p-4 animate-appearfade'>Scott McNally</h2>
            <p className='font-bold text-sm md:text-lg dark:text-white animate-appearfadeslow'>Computer Science Student based in Dublin, Ireland</p>
          </div>
          <div className='flex justify-center  mb-5 '>
            <button onClick={handleClick} className=' text-base md:text-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md animate-appearfadeslow mx-4'>
              <h3 className='font-bold '>About Me</h3>
            </button>
            <button onClick={handleClick2} className=' text-base md:text-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md animate-appearfadeslow mx-1 '>
              <h3 className='font-bold '>My Projects</h3>
            </button>




          </div>
          <div className='flex justify-center mb-5'>
            <div className='md:text-4xl bg-gradient-to-r from-gray-400 to-gray-600 text-3xl flex justify-center text-white a px-4 py-2 rounded-md md:w-56 animate-appearfadeslow '>
              <AiFillLinkedin/>
              <h3 className='md:text-xl text-base py-1 px-2 font-bold'><a href='https://www.linkedin.com/in/scottamcnally'>Get in Touch</a></h3>
            </div>
          </div>
        </section>
        <section ref={ref} className='min-h-screen '>
          <h3 className='text-2xl font-burtons py-1 dark:text-white text-center'>About Me</h3>
          <p className='text-sm md:text-base p-4 text-gray-800 m-1 mb-2 dark:text-gray-200 shadow-2xl text-center rounded-3xl max-w-xl mx-auto'>
            I am currently studying Computer Science in <span className='text-pink-400 font-bold'>Trinity College
            Dublin</span> in the class of 2027. As a part of my studies, I do a 
            lot of work using <span className='text-pink-400 font-bold'>Java</span> and am learning to use it in a wide
            area of applications. Alongside my college course, I enjoy
            creating apps using the <span className='text-pink-400 font-bold'>Swift Programming Language</span> and 
            making websites with modern tools such as <span className='text-pink-400 font-bold'>React and CSS tailwind</span>.<br/>
            I also taught myself <span className='text-pink-400 font-bold'>Python</span> while in secondary school. I used
            this to recreate Mathematical concepts such as Conway's Game
            Of Life and other projects. <br/>
            I really enjoy learning new things and aquiring new skills.

          </p>
          <div className='text-center rounded-3xl shadow-2xl p-5 mb-8 max-w-xl mx-auto '>
            <h3 className='text-xl md:text-2xl py-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>I have experience with:</h3>
            <div className='flex justify-center text-lg bg-gradient-to-r from-orange-400 to-orange-600 text-white w-48 mx-auto rounded-lg mb-3'>
              <Image src={swift} className="h-5 w-5 my-auto mr-2" alt="image"/>
              <p className=' font-bold py-2'><a href='https://developer.apple.com/swift/'>Swift</a></p>
            </div>
            <div className='flex justify-center text-lg bg-gradient-to-r from-red-500 to-red-700 text-white w-48 mx-auto rounded-lg mb-3'>
              <Image src={java} className="h-5 w-7 my-auto mr-2" alt="image"/>
              <p className=' font-bold py-2'><a href='https://docs.oracle.com/javase/8/docs/technotes/guides/language/index.html'>Java</a></p>
            </div>
            <div className='flex justify-center text-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white w-48 mx-auto rounded-lg mb-3'>
              <Image src={python} className="h-5 w-5 my-auto mr-2" alt="image"/>
              <p className=' font-bold py-2'><a href='https://www.python.org'>Python</a></p>
            </div>
            <div className='flex justify-center text-lg bg-gradient-to-r from-cyan-500 to-cyan-700 text-white w-48 mx-auto rounded-lg mb-3'>
              <Image src={web} className="h-5 w-5 my-auto mr-2" alt="image"/>
              <p className=' font-bold py-2'><a href='https://reactjs.org'>Web Dev</a></p>
            </div>

          </div>
        </section>
        <section ref={ref2} className='min-h-screen'>
          <h3 className='text-2xl font-burtons py-1 dark:text-white text-center'>Portfolio</h3>
          <p className='text-sm md:text-base p-4 text-gray-800 m-1 mb-2 dark:text-gray-200 shadow-2xl text-center rounded-3xl max-w-xl mx-auto'>
            The following are a range of projects which I have done using 
            the languages listed above. Click on a project to view more information.

          </p>

          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
          <button className='basis-1/3 flex-1 max-w-sm mx-auto  rounded-3xl relative overflow-hidden z-10' onClick={() => setVisible0(!visible0)}>
              {visible0 && <div className=' z-30 absolute top-0 left-0 bg-gradient-to-r from-gray-400 to-gray-500 w-full h-full rounded-3xl opacity-90 animate-appearfade overflow-auto'>
                <p className=' text-white text-center mt-16 mx-2 text-xs md:text-s'>ScrybbleChat is a messaging app which allows people to send doodles or Scrybbles to each other
                 as a form of communication. It's still in development and I am continuously adding additional functionality such as groupchats and more drawing tools. This is a full stack app 
                 using Swift along with Firebase Database, Messaging and Authentication. It's my largest project to date and I hope to release it to the IOS app store soon. The beta version is currently 
                 available for testing</p>
                <a href='https://github.com/scottmcn204/PyktoChat' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white relative top-6 p-3 rounded-lg mx-3'>View the Code</a>
                <a href='https://testflight.apple.com/join/Kl8Ah9ZO' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white relative top-6 p-3 rounded-lg mx-3'>Download the App</a>

                </div>}
              <h2 className=' absolute top-3 left-4 z-50  bg-gradient-to-r from-purple-400 to-pink-600 text-white p-2 rounded-xl'>ScrybbleChat</h2>
              <Image src={scrybble} className='rounded-3xl object-cover opacity-80 shadow-2xl z-0'  width={'100%'} height={'100%'} alt="image"/>
            </button>
          <button className='basis-1/3 flex-1 max-w-sm mx-auto  rounded-3xl relative overflow-hidden z-10' onClick={() => setVisible5(!visible5)}>
              {visible5 && <div className=' z-30 absolute top-0 left-0 bg-gradient-to-r from-gray-400 to-gray-500 w-full h-full rounded-3xl opacity-90 animate-appearfade overflow-auto'>
                <p className=' text-white text-center mt-16 mx-2 text-xs md:text-s'>I created this website for Trinity's Internet Society. I used react and tailwind
                along with user interface librarys such as TsParticles which aided in creating a clean asthetic for the site's complete remake. I plan to work continuously on this website to 
                create features such as direct access to our server services for students. </p>
                <a href='https://github.com/scottmcn204/netsoc' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white relative top-6 p-3 rounded-lg mx-3'>View the Code</a>
                <a href='https://main--peppy-cassata-60f441.netlify.app' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white relative top-6 p-3 rounded-lg mx-3'>Visit the Site</a>

                </div>}
              <h2 className=' absolute top-3 left-4 z-50  bg-gradient-to-r from-purple-400 to-pink-600 text-white p-2 rounded-xl'>Netsoc Website</h2>
              <Image src={netsoc} className='rounded-3xl object-cover opacity-80 shadow-2xl z-0'  width={'100%'} height={'100%'} alt="image"/>
            </button>

            <button className='basis-1/3 flex-1 max-w-sm mx-auto  rounded-3xl relative overflow-hidden z-10' onClick={() => setVisible(!visible)}>
              {visible && <div className=' z-30 absolute top-0 left-0 bg-gradient-to-r from-gray-400 to-gray-500 w-full h-full rounded-3xl opacity-90 animate-appearfade overflow-auto'>
                <p className=' text-white text-center mt-16 mx-2 text-xs md:text-s'>This app was created using the Swift Programming Language along with a MVVM architecture.
                  It allows the user to create and store rally callouts to be used in rally races. This solves a common problem for rally navigators where it can 
                  be difficult to write down rally callouts and expensive to purchase them. This project helped in my understanding of effective UI creation, data manipulation
                  and the use of APIs specifically Mapkit. I also gained experience in working alongside advisors, in this case in the field of rally driving </p>
                <a href='https://github.com/scottmcn204/Rally' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white relative top-6 p-3 rounded-lg'>View the Code</a>
                </div>}
              <h2 className=' absolute top-3 left-4 z-50  bg-gradient-to-r from-purple-400 to-pink-600 text-white p-2 rounded-xl'>RallyNavigator App</h2>
              <Image src={rally} className='rounded-3xl object-cover opacity-80 shadow-2xl z-0'  width={'100%'} height={'100%'} alt="image"/>
            </button>
            <button className='basis-1/3 flex-1 max-w-sm mx-auto  rounded-3xl relative overflow-hidden z-10' onClick={() => setVisible1(!visible1)}>
              {visible1 && <div className=' z-30 absolute top-0 left-0 bg-gradient-to-r from-gray-400 to-gray-500 w-full h-full rounded-3xl opacity-90 animate-appearfade overflow-auto'>
                <p className=' text-white text-center mt-16 mx-2 text-xs md:text-s'>This app was made with the Swift Programming Language along with an MVVM architecture.
                  I allows users to create and organise flashcards which can then be used to test themselves. The app solves the problem of students usually
                  requiring lots of waisted paper to create flashcards for their exams and makes the process more efficeint and simple. This project introduced me to being able to 
                  store and manipulate persistant data. I also learned about different ways of doing this such as databases and local storage on mobile. </p>
                <a href='https://github.com/scottmcn204/Flashcards3' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white relative top-6 p-3 rounded-lg'>View the Code</a>
                </div>}
            <h2 className=' absolute top-3 left-4 z-50  bg-gradient-to-r from-purple-400 to-pink-600 text-white p-2 rounded-xl'>Flashcards App</h2>
              <Image src={flashcards} className='rounded-3xl object-cover opacity-80 shadow-2xl' width={'100%'} height={'100%'} alt="image"/>
            </button>
            <button className='basis-1/3 flex-1 max-w-sm mx-auto  rounded-3xl relative overflow-hidden z-10' onClick={() => setVisible2(!visible2)}>
              {visible2 && <div className=' z-30 absolute top-0 left-0 bg-gradient-to-r from-gray-400 to-gray-500 w-full h-full rounded-3xl opacity-90 animate-appearfade overflow-auto'>
                <p className=' text-white text-center mt-16 mx-2 text-xs md:text-s'>This system was created using HTML, CSS and JS for the website, a firebase database and a python programme
                  to record audio and send it to the database. The system allows a user to say a reminder to a physical device and later view that reminder as text on their own portal on the website.
                  Through this project I learned about using databases, recording and storing audio and performing API calls, specifically Google's voice to text AI API. </p>
                <a href='https://github.com/scottmcn204/DisplayWorking' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white relative top-6 p-3 rounded-lg'>View the Code</a>
                </div>}
            <h2 className=' absolute top-3 left-4 z-50  bg-gradient-to-r from-purple-400 to-pink-600 text-white p-2 rounded-xl'>Elderly Reminder System</h2>
              <Image src={helphome} className='rounded-3xl object-cover opacity-80 shadow-2xl' width={'100%'} height={'100%'} alt="image"/>
            </button>
            <button className='basis-1/3 flex-1 max-w-sm mx-auto  rounded-3xl relative overflow-hidden z-10' onClick={() => setVisible3(!visible3)}>
              {visible3 && <div className=' z-30 absolute top-0 left-0 bg-gradient-to-r from-gray-400 to-gray-500 w-full h-full rounded-3xl opacity-90 animate-appearfade overflow-auto'>
                <p className=' text-white text-center mt-16 mx-2 text-xs md:text-s'>This is the portfolio website you are currently on. It was created using moderen web design tools
                such as React and Tailwind. I used this project to learn how to use these tools and use them to create an effective UI. </p>
                <a href='https://github.com/scottmcn204/portfolio-website' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white relative top-6 p-3 rounded-lg'>View the Code</a>
                </div>}
            <h2 className=' absolute top-3 left-4 z-50  bg-gradient-to-r from-purple-400 to-pink-600 text-white p-2 rounded-xl'>Portfolio Website</h2>
              <Image src={portfolio} className='rounded-3xl object-cover opacity-80 shadow-2xl' width={'100%'} height={'100%'} alt="image"/>
            </button>
          </div>
        </section>

      </main>
    </div>
  );
}
