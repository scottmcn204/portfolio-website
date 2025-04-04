import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import{AiFillLinkedin} from 'react-icons/ai';
import Image from "next/image";
import myIcon from "/public/myIcon.png";
import aib from "/public/aib.png";
import firstGlass from "/public/firstGlass.jpg";
import netsocLogo from "/public/netsocLogo.png";
import csc from "/public/csc.jpg"
import flashcards from "/public/flashcards.png";
import helphome from "/public/help@home.png";
import portfolio from "/public/portfolio.jpeg";
import rally from "/public/rally.png";
import swift from "/public/swift.png";
import java from "/public/java.png";
import web from "/public/web.png"
import python from "/public/python.png";
import server from "/public/server.png";
import netsoc from "/public/netsoc.png";
import scrybble from "/public/scrybble.jpg";
import flightScanner from "/public/flightScanner.png"
import me from "/public/me.jpg"
import taxonomy from "/public/taxonomy.png"
import gameboy from "/public/gameboy.png"
import neural from "/public/neural.jpg"
import phish from "/public/phish.png"
import { use, useState } from 'react';
import {useRef} from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards"

const images = [
  { src: taxonomy, text: "", title: "Quantexa Project - Interactive Taxonomy Builder" },
  { src: phish, text: "Phishing is a type of cyberattack which aims to collect sensitive information from individuals by masking as a trusted source, such as a friend or trusted website. PhishingBoat was a project created alongside a classmate at KTH with the goal of improving upon traditional methods of phishing website detection using machine learning methods. The program would run a classification model on a website, and if it thought it was phishing, it would warn the user. We experimented with Random Forest Classification, Multi-layer Perceptrons and Transformer Models. In the end our program achieved an accuracy of 94% on test data and performed as expected with edge cases in the real world. The project receieved top marks in our AI project course. From this I gained valuable skills in collaboration with complex project as well as experience working with a research project.", title: "PhishingBoat" },
  { src: portfolio, text: "This is the portfolio website you are currently on. It was created using moderen web design tools such as React and Tailwind. I used this project to learn how to use these tools and use them to create an effective UI.", title: "Portfolio Website" },
  { src: scrybble, text: "ScrybbleChat is a messaging app which allows people to send doodles or Scrybbles to each other as a form of communication. It's still in development and I am continuously adding additional functionality such as groupchats and more drawing tools. This is a full stack app using Swift along with Firebase Database, Messaging and Authentication. It's my largest project to date and I hope to release it to the IOS app store soon. The beta version is currently available for testing", title: "ScrybbleChat" },
  { src: netsoc, text: "I created this website for Trinity's Internet Society. I used react and tailwind along with user interface librarys such as TsParticles which aided in creating a clean asthetic for the site's complete remake. I plan to work continuously on this website to create features such as direct access to our server services for students.", title: "Netsoc Website" },
  { src: flightScanner, text: "FlightScanner was made for my programming project module in college. I was assigned as the team lead for my group of 4. We were given 100,000 rows of US flight data from 2020, and our task was to create an application using this data. We created a flight scanner app that allowed the user to search by map or text for an airport, get stats on the flights in and out of that airport and calculate CO2 emissions for a certain time period. My job as team lead involved organising sessions, delegating roles while making sure we were on track with our brief and deadlines. I focused on creating the search engine, helping with the map and some of the airport statistics and parsing the data. This project taught me a lot about project management under a strict deadline and good communication in a team programming environment.", title: "FlightScanner" },
];


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
  const [visible6, setVisible6] = useState(false);
  const [visible7, setVisible7] = useState(false);
  const [visible8, setVisible8] = useState(false);
  const [visible9, setVisible9] = useState(false);
  const [visible10, setVisible10] = useState(false);
  const [visible11, setVisible11] = useState(false);
  const [visible12, setVisible12] = useState(false);
  const [visible13, setVisible13] = useState(false);
  const [visible14, setVisible14] = useState(false);
  const [visible15, setVisible15] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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
            <h1 className='text-lg md:text-xl font-burtons dark:text-white'>MCNALLSC</h1>
            <ul className='flex items-center'>
              <li className=' cursor-pointer text-white bg-gradient-to-r from-cyan-500 to-teal-500 p-2 rounded-full text-base md:text-xl'><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)}/></li>
              <li className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-4 text-xs md:text-base'><a href="https://drive.google.com/file/d/1mnlwsTYTVEmMYsoRSZ_HqgykD0uCIiHL/view?usp=drive_link">Resume</a></li>
            </ul>
          </nav>
          <div className='relative mx-auto w-40 h-40 bg-gradient-to-b from-gray-300 to-teal-300 rounded-full shadow-2xl md:h-64 md:w-64 animate-appearfade'>
            <Image src={myIcon} className='rounded-full h-full w-full object-cover object-center border-transparent border-4' alt="image"/>
          </div>
          <div className='text-center pb-10 pt-5 z-40'>
            <h2 className='font-extrabold text-transparent text-4xl md:text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 p-4 animate-appearfade z-40'>Scott McNally</h2>
            <p className='font-bold text-sm md:text-lg dark:text-white animate-appearfadeslow z-40'>Computer Science Student based in Dublin, Ireland</p>
          </div>
          <div className='flex justify-center  mb-5'>
            <button onClick={handleClick} className=' text-base md:text-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md animate-appearfadeslow mx-4 z-40'>
              <h3 className='font-bold '>About Me</h3>
            </button>
            <button onClick={handleClick2} className=' text-base md:text-xl bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md animate-appearfadeslow mx-1 z-40'>
              <h3 className='font-bold '>My Projects</h3>
            </button>

          </div>
          <div className='flex justify-center mb-5 z-40'>
            <div className='md:text-4xl bg-gradient-to-r from-gray-400 to-gray-600 text-3xl flex justify-center text-white a px-4 py-2 rounded-md md:w-56 animate-appearfadeslow z-40'>
              <AiFillLinkedin/>
              <h3 className='md:text-xl text-base py-1 px-2 font-bold'><a href='https://www.linkedin.com/in/scottamcnally'>Get in Touch</a></h3>
            </div>
          </div>
        </section>
        <section ref={ref} className='min-h-screen '>
          <h3 className='text-2xl font-burtons py-1 dark:text-white text-center'>About Me</h3>
          
          <div className='text-sm md:text-base p-4 text-gray-800 m-1 mb-8 dark:text-gray-200 shadow-2xl text-center rounded-3xl max-w-xl mx-auto'>
          <p className='mb-2'>
            I am currently studying Computer Science in <span className='text-pink-400 font-bold'>Trinity College
            Dublin</span> in the class of 2027. As a part of my studies, I do a 
            lot of work using <span className='text-pink-400 font-bold'>Java and C</span> and am learning to use them in a wide
            area of applications. I also do a lot of work with <span className='text-pink-400 font-bold'>ARM Assembly and VHDL</span> to understand hardware at a low level,
            this is a part of my course I'm especially passionate about. Alongside my college course, I enjoy
            creating apps using the <span className='text-pink-400 font-bold'>Swift Programming Language</span> and 
            making websites with modern tools such as <span className='text-pink-400 font-bold'>React and CSS tailwind</span>.<br/>
            While in secondary school, I also taught myself <span className='text-pink-400 font-bold'>Python</span>, which I now use to learn about and build Neural Networks .<br/>
            I really enjoy learning new things and aquiring new skills. I spend a lot of my free time playing Ultimate Frisbee with my local team
            and working on vintage cars such as my MG Midget and Morris Minor 1000.
            </p>
            <div className='relative mx-auto w-40 h-40 bg-gradient-to-b from-gray-300 to-teal-300 rounded-3xl shadow-2xl md:h-64 md:w-64 '>
            <Image src={me} className='rounded-3xl h-full w-full object-cover object-center border-transparent border-4' alt="image"/>
            </div>
            </div>

            {!visible6 && !visible7 && !visible8 && !visible9 && <div className='text-center rounded-3xl shadow-2xl p-5 mb-8 max-w-xl mx-auto animate-fadeInSlow'>
            <h3 className='text-xl md:text-2xl py-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>My Work Experience:</h3>
            <p className='mb-3 text-gray-800 dark:text-gray-200 font-bold'>Click to learn more!</p>
            <button className='flex justify-center text-lg bg-gradient-to-r from-purple-500 to-purple-800 text-white w-48 mx-auto rounded-lg mb-3' onClick={() => setVisible6(!visible6)}>
              <Image src={aib} className="h-7 w-5 my-auto mr-2" alt="image"/>
              <p className=' font-bold py-2'>AIB</p>
            </button>
            <button className='flex justify-center text-lg bg-gradient-to-r from-gray-500 to-gray-700 text-white w-48 mx-auto rounded-lg mb-3' onClick={() => setVisible7(!visible7)}>
              <Image src={netsocLogo} className="h-5 w-5 my-auto mr-2" alt="image"/>
              <p className=' font-bold py-2'>NetSoc</p>
            </button>
            <button className='flex justify-center text-lg bg-gradient-to-r from-blue-400 to-blue-600 text-white w-48 mx-auto rounded-lg mb-3' onClick={() => setVisible8(!visible8)}>
              <Image src={firstGlass} className="h-7 w-7 my-auto mr-2 rounded-2xl " alt="image"/>
              <p className=' font-bold py-2'>FirstGlass</p>
            </button>
            <button className='flex justify-center text-lg bg-gradient-to-r from-yellow-500 to-blue-700 text-white w-48 mx-auto rounded-lg mb-3' onClick={() => setVisible9(!visible9)}>
              <Image src={csc} className="h-7 w-7 my-auto mr-2 rounded-2xl" alt="image"/>
              <p className=' font-bold py-2'>Sailing</p>
            </button>
          </div>}

          {visible6 && <div className='text-center rounded-3xl shadow-2xl p-5 mb-8 max-w-xl mx-auto animate-fadeInSlow'>
            <button className='flex justify-center text-lg bg-gradient-to-r from-purple-500 to-purple-800 text-white w-48 mx-auto rounded-lg mb-3'>
              <Image src={aib} className="h-7 w-5 my-auto mr-2" alt="image"/>
              <p className=' font-bold py-2'>AIB</p>
            </button>
            <p className='mb-3 text-gray-800 dark:text-gray-200'>I worked with AIB between May 2023 and September 2023 as a Storage Admin Intern. I started off my
            internship learning from others on the team through knowledge transfer sessions and slowly taking on some operational roles. I then moved on to my main project for the summer
            of implementing reporting software for the storage team. I had the opportunity to use my skills in SQL and PowerBI to debug reporting problems in Aptare 
            and create a presentation of these problems for the application owner Veritas. I learned invaluable skills over the course of the internship not only in knowledge 
            of the storage system, but also accountability, and collaboration with a team.</p>
            <button className='flex justify-center text-lg bg-gradient-to-r from-gray-400 to-gray-600 text-white w-48 mx-auto rounded-lg mb-3' onClick={() => setVisible6(!visible6)}>
              <p className=' font-bold py-2'>Back</p>
            </button>
          </div>}

          {visible7 && <div className='text-center rounded-3xl shadow-2xl p-5 mb-8 max-w-xl mx-auto animate-fadeInSlow'>
            <button className='flex justify-center text-lg bg-gradient-to-r from-gray-500 to-gray-700 text-white w-48 mx-auto rounded-lg mb-3'>
              <Image src={netsocLogo} className="h-5 w-5 my-auto mr-2" alt="image"/>
              <p className=' font-bold py-2'>NetSoc</p>
            </button>
            <p className='mb-3 text-gray-800 dark:text-gray-200'>Netsoc or Dublin University Internet Society is a society focused on promoting everything computer science and 
            knowledge surrounding it. We also run our own servers, supplying VMs and storage for students that are part of the society. I currently work as both the webmaster and sysadmin for
            the society. My roles include creating the current website from scratch which is seen in my portfolio. I am currently working on setting up our servers after 
            significant down time last year.</p>
            <button className='flex justify-center text-lg bg-gradient-to-r from-gray-400 to-gray-600 text-white w-48 mx-auto rounded-lg mb-3' onClick={() => setVisible7(!visible7)}>
              <p className=' font-bold py-2'>Back</p>
            </button>
          </div>}

          {visible8 && <div className='text-center rounded-3xl shadow-2xl p-5 mb-8 max-w-xl mx-auto animate-fadeInSlow'>
            <button className='flex justify-center text-lg bg-gradient-to-r from-blue-400 to-blue-600 text-white w-48 mx-auto rounded-lg mb-3'>
              <Image src={firstGlass} className="h-7 w-7 my-auto mr-2 rounded-2xl " alt="image"/>
              <p className=' font-bold py-2'>FirstGlass</p>
            </button>
            <p className='mb-3 text-gray-800 dark:text-gray-200'>While working at First Glass I had the opportunity to work alongside engineers
                in different aspects of the glass manufacturing process. I learned problem solving
                skills from them and how the company was run and managed. I developed my
                skills in intuition and diligence at this job. During my time there I was given an
                engineering problem involving the logistics of keeping very large panes of glass
                protected during long distance transport. My solution required me to design and
                fabricate steel A-Frames with wooden dampers, along with a tracking device.</p>
            <button className='flex justify-center text-lg bg-gradient-to-r from-gray-400 to-gray-600 text-white w-48 mx-auto rounded-lg mb-3' onClick={() => setVisible8(!visible8)}>
              <p className=' font-bold py-2'>Back</p>
            </button>
          </div>}

          {visible9 && <div className='text-center rounded-3xl shadow-2xl p-5 mb-8 max-w-xl mx-auto animate-fadeInSlow'>
          <button className='flex justify-center text-lg bg-gradient-to-r from-yellow-500 to-blue-700 text-white w-48 mx-auto rounded-lg mb-3' onClick={() => setVisible9(!visible9)}>
              <Image src={csc} className="h-7 w-7 my-auto mr-2 rounded-2xl" alt="image"/>
              <p className=' font-bold py-2'>Sailing</p>
            </button>
            <p className='mb-3 text-gray-800 dark:text-gray-200'>I worked as a sailing instructor in Courtown Sailing Club each year during the
                summer months from 2018 to 2022. I had a hands-on role with the organisation
                of the club and aided in management alongside teaching a different level each
                year. I was able to develop key skills in communication, management and
                working with a team during this time. As it’s a small club, I played an important
                role in managing the club alongside my responsibilities as an instructor.</p>
            <button className='flex justify-center text-lg bg-gradient-to-r from-gray-400 to-gray-600 text-white w-48 mx-auto rounded-lg mb-3' onClick={() => setVisible9(!visible9)}>
              <p className=' font-bold py-2'>Back</p>
            </button>
          </div>}
          

          
          {!visible10 && !visible11 && !visible12 && !visible13 && !visible14 && <div className={'text-center rounded-3xl shadow-2xl p-5 mb-8 max-w-xl mx-auto animate-fadeInSlow'}>
            <h3 className='text-xl md:text-2xl py-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>I have experience with:</h3>
            <p className='mb-3 text-gray-800 dark:text-gray-200 font-bold'>Click to learn more!</p>
            <button className='flex justify-center text-lg bg-gradient-to-r from-orange-400 to-orange-600 text-white w-48 mx-auto rounded-lg mb-3' onClick={() => setVisible10(!visible10)}>
              <Image src={swift} className="h-5 w-5 my-auto mr-2" alt="image"/>
              <p className=' font-bold py-2'>Swift</p>
            </button>
            <button className='flex justify-center text-lg bg-gradient-to-r from-red-500 to-red-700 text-white w-48 mx-auto rounded-lg mb-3'onClick={() => setVisible11(!visible11)}>
              <Image src={java} className="h-5 w-7 my-auto mr-2" alt="image"/>
              <p className=' font-bold py-2'>Java</p>
            </button>
            <button className='flex justify-center text-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white w-48 mx-auto rounded-lg mb-3'onClick={() => setVisible12(!visible12)}>
              <Image src={python} className="h-5 w-5 my-auto mr-2" alt="image"/>
              <p className=' font-bold py-2'>Python</p>
            </button>
            <button className='flex justify-center text-lg bg-gradient-to-r from-cyan-500 to-cyan-700 text-white w-48 mx-auto rounded-lg mb-3'onClick={() => setVisible13(!visible13)}>
              <Image src={web} className="h-5 w-5 my-auto mr-2" alt="image"/>
              <p className=' font-bold py-2'>Web Dev</p>
            </button>
            <button className='flex justify-center text-lg bg-gradient-to-r from-pink-500 to-pink-700 text-white w-48 mx-auto rounded-lg mb-3' onClick={() => setVisible14(!visible14)}>
              <Image src={server} className="h-5 w-5 my-auto mr-2" alt="image"/>
              <p className=' font-bold py-2'>Server Admin</p>
            </button>
          </div>}
          {visible10 && <div className='text-center rounded-3xl shadow-2xl p-5 mb-8 max-w-xl mx-auto animate-fadeInSlow'>
            <button className='flex justify-center text-lg bg-gradient-to-r from-orange-400 to-orange-600 text-white w-48 mx-auto rounded-lg mb-3'>
              <Image src={swift} className="h-5 w-5 my-auto mr-2" alt="image"/>
              <p className=' font-bold py-2'>Swift</p>
            </button>
            <p className='mb-3 text-gray-800 dark:text-gray-200'>
              I started learning Swift as a way to make IOS applications. I started to learn through tutorials on codewithchris.com and using Apple's Swift documentation.
              After creating some practice projects I started some of my own projects like Flashcards and RallyNavigator App. Both of which used JSON data displayed using SwiftUI.
              My most complex project was ScrybbleChat, a drawing based messaging app, using a Firebase database, SwiftUI interface and Apple's notification API.
            </p>
            <button className='flex justify-center text-lg bg-gradient-to-r from-gray-400 to-gray-600 text-white w-48 mx-auto rounded-lg mb-3' onClick={() => setVisible10(!visible10)}>
              <p className=' font-bold py-2'>Back</p>
            </button>
          </div>}
          {visible11 && <div className='text-center rounded-3xl shadow-2xl p-5 mb-8 max-w-xl mx-auto animate-fadeInSlow'>
            <div className='flex justify-center text-lg bg-gradient-to-r from-red-500 to-red-700 text-white w-48 mx-auto rounded-lg mb-3'>
              <Image src={java} className="h-5 w-7 my-auto mr-2" alt="image"/>
              <p className=' font-bold py-2'>Java</p>
            </div>
            <p className='mb-3 text-gray-800 dark:text-gray-200'>
              I frequently use Java for my software development module in college. We have learned object oriented programming through Java and I am now quite confident
              in my ability to use it. We've used it in a wide variety of areas such as a flight scanner application, different mathematical programs and parsing data.
            </p>
            <button className='flex justify-center text-lg bg-gradient-to-r from-gray-400 to-gray-600 text-white w-48 mx-auto rounded-lg mb-3' onClick={() => setVisible11(!visible11)}>
              <p className=' font-bold py-2'>Back</p>
            </button>
          </div>}
          {visible12 && <div className='text-center rounded-3xl shadow-2xl p-5 mb-8 max-w-xl mx-auto animate-fadeInSlow'>
            <button className='flex justify-center text-lg bg-gradient-to-r from-blue-600 to-blue-800 text-white w-48 mx-auto rounded-lg mb-3'>
              <Image src={python} className="h-5 w-5 my-auto mr-2" alt="image"/>
              <p className=' font-bold py-2'>Python</p>
            </button>
            <p className='mb-3 text-gray-800 dark:text-gray-200'>
              Python was the first programming language I learned, which helped me to get a foundational understanding of programming and software development. I used it to 
              create small 2d games with PyGame, programme Raspberry Pis and MicroBits and programme mathematical concepts such as Conway's Game of Life. I now utilise Python 
              along with the numpy library to learn about and build neural networks
            </p>
            <button className='flex justify-center text-lg bg-gradient-to-r from-gray-400 to-gray-600 text-white w-48 mx-auto rounded-lg mb-3' onClick={() => setVisible12(!visible12)}>
              <p className=' font-bold py-2'>Back</p>
            </button>
          </div>}
          {visible13 && <div className='text-center rounded-3xl shadow-2xl p-5 mb-8 max-w-xl mx-auto animate-fadeInSlow'>
            <button className='flex justify-center text-lg bg-gradient-to-r from-cyan-500 to-cyan-700 text-white w-48 mx-auto rounded-lg mb-3'>
              <Image src={web} className="h-5 w-5 my-auto mr-2" alt="image"/>
              <p className=' font-bold py-2'>Web Dev</p>
            </button>
            <p className='mb-3 text-gray-800 dark:text-gray-200'>
              I really enjoy making modern looking websites like this one and the Netsoc website seen below. I am experienced with React, Next.js and CSS tailwind.
              I started off learning to use vanilla HTNL, CSS and JS seen in the website for my Elderly Reminder System. Then moving on to more modern tools. This is a 
              skill I continuously practice.
            </p>
            <button className='flex justify-center text-lg bg-gradient-to-r from-gray-400 to-gray-600 text-white w-48 mx-auto rounded-lg mb-3' onClick={() => setVisible13(!visible13)}>
              <p className=' font-bold py-2'>Back</p>
            </button>
          </div>}
          {visible14 && <div className='text-center rounded-3xl shadow-2xl p-5 mb-8 max-w-xl mx-auto animate-fadeInSlow'>
            <button className='flex justify-center text-lg bg-gradient-to-r from-pink-500 to-pink-700 text-white w-48 mx-auto rounded-lg mb-3'>
              <Image src={server} className="h-5 w-5 my-auto mr-2" alt="image"/>
              <p className=' font-bold py-2'>Server Admin</p>
            </button>
            <p className='mb-3 text-gray-800 dark:text-gray-200'>
              Through both my internship with AIB and my work with NetSoc, I have a lot of work experience with servers. I have real world experience using both SQL and 
              reporting tools like PowerBI and Aptare. I have spent time on both the operational side and project development side of this field.
            </p>
            <button className='flex justify-center text-lg bg-gradient-to-r from-gray-400 to-gray-600 text-white w-48 mx-auto rounded-lg mb-3' onClick={() => setVisible14(!visible14)}>
              <p className=' font-bold py-2'>Back</p>
            </button>
          </div>}
        </section>
        <section ref={ref2} className='min-h-screen'>
          {/* <h3 className='text-2xl font-burtons py-1 dark:text-white text-center'>Portfolio</h3>
          <p className='text-sm md:text-base p-4 text-gray-800 m-1 mb-2 dark:text-gray-200 shadow-2xl text-center rounded-3xl max-w-xl mx-auto'>
            The following are a range of projects which I have done using 
            the languages listed above. Click on a project to view more information.
          </p> */}
          {/* <div className='text-sm md:text-base p-4 text-gray-800 m-1 mb-2 dark:text-gray-200 shadow-2xl text-center rounded-3xl max-w-xl mx-auto'>
            <h3 className='text-xl md:text-2xl py-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>What I'm currently working on:</h3>
            <p className='mb-2'>
              I'm currently learning about Neural Networks and Deep Learning through projects outside of my college course. This is an area of the field I'd love to find out more about.
              Right now Im following Michael Nielson's book on the topic and building a Neural Network for classifying handwritten digits. I plan to continuously do small projects such as 
              this alongside my college course
            </p>
            <Image src={neural} className='rounded-3xl object-cover   z-0'  width={'100%'} height={'100%'} alt="image"/>
          </div> */}
          {/* <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'> */}
          {/* <button className='basis-1/3 flex-1 max-w-sm mx-auto  rounded-3xl relative overflow-hidden z-10 bg-gradient-to-r from-gray-200 to-gray-500 shadow-2xl' onClick={() => setVisible0(!visible0)}>
              {visible0 && <div className=' z-30 absolute top-0 left-0 bg-gradient-to-r from-gray-400 to-gray-500 w-full h-full rounded-3xl opacity-90 animate-appearfade overflow-auto'>
                <p className=' text-white text-center mt-16 mx-2 text-xs md:text-s'>ScrybbleChat is a messaging app which allows people to send doodles or Scrybbles to each other
                 as a form of communication. It's still in development and I am continuously adding additional functionality such as groupchats and more drawing tools. This is a full stack app 
                 using Swift along with Firebase Database, Messaging and Authentication. It's my largest project to date and I hope to release it to the IOS app store soon. The beta version is currently 
                 available for testing</p>
                <a href='https://github.com/scottmcn204/PyktoChat' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white relative top-6 p-3 rounded-lg mx-3'>View the Code</a>
                <a href='https://testflight.apple.com/join/Kl8Ah9ZO' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white relative top-6 p-3 rounded-lg mx-3'>Download the App</a>

                </div>}
                
              <h2 className=' absolute top-3 left-4 z-50  bg-gradient-to-r from-purple-400 to-pink-600 text-white p-2 rounded-xl'>ScrybbleChat</h2>
              <Image src={scrybble} className='rounded-3xl object-cover   z-0'  width={'100%'} height={'100%'} alt="image"/>
            </button>
          <button className='basis-1/3 flex-1 max-w-sm mx-auto  rounded-3xl relative overflow-hidden z-10 bg-gradient-to-r from-gray-200 to-gray-500 shadow-2xl' onClick={() => setVisible15(!visible15)}>
              {visible15 && <div className=' z-30 absolute top-0 left-0 bg-gradient-to-r from-gray-400 to-gray-500 w-full h-full rounded-3xl opacity-90 animate-appearfade overflow-auto'>
                <p className=' text-white text-center mt-16 mx-2 text-xs md:text-s'>FlightScanner was made for my programming project module in college. I was assigned
                 as the team lead for my group of 4. We were given 100,000 rows of US flight data from 2020, and our task was to create an application using this data. 
                 We created a flight scanner app that allowed the user to search by map or text for an airport, get stats on the flights in and out of that airport and 
                 calculate CO2 emissions for a certain time period. My job as team lead involved organising sessions, delegating roles while making sure we were on track
                  with our brief and deadlines. I focused on creating the search engine, helping with the map and some of the airport statistics and parsing the data. This project taught me a lot
                  about project management under a strict deadline and good communication in a team programming environment.</p>
                <a href='https://github.com/scottmcn204/Group27Project' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white relative top-6 p-3 rounded-lg mx-3'>View the Code</a>
                </div>}
              <h2 className=' absolute top-3 left-4 z-50  bg-gradient-to-r from-purple-400 to-pink-600 text-white p-2 rounded-xl'>FlightScanner</h2>
              <Image src={flightScanner} className='rounded-3xl object-cover   z-0'  width={'100%'} height={'100%'} alt="image"/>
            </button>
          
          <button className='basis-1/3 flex-1 max-w-sm mx-auto  rounded-3xl relative overflow-hidden z-10 bg-gradient-to-r from-gray-200 to-gray-500 shadow-2xl' onClick={() => setVisible5(!visible5)}>
              {visible5 && <div className=' z-30 absolute top-0 left-0 bg-gradient-to-r from-gray-400 to-gray-500 w-full h-full rounded-3xl opacity-90 animate-appearfade overflow-auto'>
                <p className=' text-white text-center mt-16 mx-2 text-xs md:text-s'>I created this website for Trinity's Internet Society. I used react and tailwind
                along with user interface librarys such as TsParticles which aided in creating a clean asthetic for the site's complete remake. I plan to work continuously on this website to 
                create features such as direct access to our server services for students. </p>
                <a href='https://github.com/scottmcn204/netsoc' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white relative top-6 p-3 rounded-lg mx-3'>View the Code</a>
                <a href='https://netsoc.netlify.app' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white relative top-6 p-3 rounded-lg mx-3'>Visit the Site</a>

                </div>}
              <h2 className=' absolute top-3 left-4 z-50  bg-gradient-to-r from-purple-400 to-pink-600 text-white p-2 rounded-xl'>Netsoc Website</h2>
              <Image src={netsoc} className='rounded-3xl object-cover   z-0'  width={'100%'} height={'100%'} alt="image"/>
            </button> */}

            {/* <button className='basis-1/3 flex-1 max-w-sm mx-auto  rounded-3xl relative overflow-hidden z-10 bg-gradient-to-r from-gray-200 to-gray-500 shadow-2xl' onClick={() => setVisible(!visible)}>
              {visible && <div className=' z-30 absolute top-0 left-0 bg-gradient-to-r from-gray-400 to-gray-500 w-full h-full rounded-3xl opacity-90 animate-appearfade overflow-auto'>
                <p className=' text-white text-center mt-16 mx-2 text-xs md:text-s'>This app was created using the Swift Programming Language along with a MVVM architecture.
                  It allows the user to create and store rally callouts to be used in rally races. This solves a common problem for rally navigators where it can 
                  be difficult to write down rally callouts and expensive to purchase them. This project helped in my understanding of effective UI creation, data manipulation
                  and the use of APIs specifically Mapkit. I also gained experience in working alongside advisors, in this case in the field of rally driving </p>
                <a href='https://github.com/scottmcn204/Rally' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white relative top-6 p-3 rounded-lg'>View the Code</a>
                </div>}
              <h2 className=' absolute top-3 left-4 z-50  bg-gradient-to-r from-purple-400 to-pink-600 text-white p-2 rounded-xl'>RallyNavigator App</h2>
              <Image src={rally} className='rounded-3xl object-cover  z-0'  width={'100%'} height={'100%'} alt="image"/>
            </button> */}
            {/* <button className='basis-1/3 flex-1 max-w-sm mx-auto  rounded-3xl relative overflow-hidden z-10 bg-gradient-to-r from-gray-200 to-gray-500 shadow-2xl' onClick={() => setVisible1(!visible1)}>
              {visible1 && <div className=' z-30 absolute top-0 left-0 bg-gradient-to-r from-gray-400 to-gray-500 w-full h-full rounded-3xl opacity-90 animate-appearfade overflow-auto'>
                <p className=' text-white text-center mt-16 mx-2 text-xs md:text-s'>This app was made with the Swift Programming Language along with an MVVM architecture.
                  It allows users to create and organise flashcards which can then be used to test themselves. The app solves the problem of students usually
                  requiring lots of waisted paper to create flashcards for their exams and makes the process more efficient and simple. This project introduced me to being able to 
                  store and manipulate persistant data. I also learned about different ways of doing this such as databases and local storage on mobile. </p>
                <a href='https://github.com/scottmcn204/Flashcards3' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white relative top-6 p-3 rounded-lg'>View the Code</a>
                </div>}
            <h2 className=' absolute top-3 left-4 z-50  bg-gradient-to-r from-purple-400 to-pink-600 text-white p-2 rounded-xl'>Flashcards App</h2>
              <Image src={flashcards} className='rounded-3xl object-cover  ' width={'100%'} height={'100%'} alt="image"/>
            </button>
            <button className='basis-1/3 flex-1 max-w-sm mx-auto  rounded-3xl relative overflow-hidden z-10 bg-gradient-to-r from-gray-200 to-gray-500 shadow-2xl' onClick={() => setVisible3(!visible3)}>
              {visible3 && <div className=' z-30 absolute top-0 left-0 bg-gradient-to-r from-gray-400 to-gray-500 w-full h-full rounded-3xl opacity-90 animate-appearfade overflow-auto'>
                <p className=' text-white text-center mt-16 mx-2 text-xs md:text-s'>This is the portfolio website you are currently on. It was created using moderen web design tools
                such as React and Tailwind. I used this project to learn how to use these tools and use them to create an effective UI. </p>
                <a href='https://github.com/scottmcn204/portfolio-website' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white relative top-6 p-3 rounded-lg'>View the Code</a>
                </div>}
            <h2 className=' absolute top-3 left-4 z-50  bg-gradient-to-r from-purple-400 to-pink-600 text-white p-2 rounded-xl'>Portfolio Website</h2>
              <Image src={portfolio} className='rounded-3xl object-cover ' width={'100%'} height={'100%'} alt="image"/>
            </button>
            <button className='basis-1/3 flex-1 max-w-sm mx-auto  rounded-3xl relative overflow-hidden z-10 bg-gradient-to-r from-gray-200 to-gray-500 shadow-2xl' onClick={() => setVisible2(!visible2)}>
              {visible2 && <div className=' z-30 absolute top-0 left-0 bg-gradient-to-r from-gray-400 to-gray-500 w-full h-full rounded-3xl opacity-90 animate-appearfade overflow-auto'>
                <p className=' text-white text-center mt-16 mx-2 text-xs md:text-s'>This system was created using HTML, CSS and JS for the website, a firebase database and a python programme
                  to record audio and send it to the database. The system allows a user to say a reminder to a physical device and later view that reminder as text on their own portal on the website.
                  Through this project I learned about using databases, recording and storing audio and performing API calls, specifically Google's voice to text AI API. </p>
                <a href='https://github.com/scottmcn204/DisplayWorking' className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white relative top-6 p-3 rounded-lg'>View the Code</a>
                </div>}
            <h2 className=' absolute top-3 left-4 z-50  bg-gradient-to-r from-purple-400 to-pink-600 text-white p-2 rounded-xl'>Elderly Reminder System</h2>
              <Image src={helphome} className='rounded-3xl object-cover  ' width={'100%'} height={'100%'} alt="image"/>
            </button> */}
          {/* </div> */}

          <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl  mb-4 font-burtons">Portfolio</h1>

            <div className="w-full my-3 max-w-xl flex justify-center mx-auto aspect-square">
              <Swiper 
                  modules={[Navigation, Pagination, Autoplay]}
                  grabCursor={true}
                  centeredSlides={true}
                  // breakpoints={{
                  //   320: { slidesPerView: 1 }, // 1 image on small screens
                  //   640: { slidesPerView: 1.5 }, // Slightly wider on tablets
                  //   1024: { slidesPerView: 2.5 }, // 3 images on desktops
                  // }}
                  loop={true}
                  autoplay={{ delay: 5000 }}
                  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                  navigation
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                className="rounded-xl overflow-hidden "
              >
                {images.map((item, index) => (
                  <SwiperSlide key={index} className="flex justify-center">
                    <div className="absoulute w-96 h-96 justify-center items-center">
                      <Image
                        src={item.src}  
                        alt={`Slide ${index}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                        priority={index === 0} // Load the first image first
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>  
              <div className='text-sm md:text-base p-4 text-gray-800 m-1 mb-2 dark:text-gray-200 shadow-2xl text-center rounded-3xl max-w-xl mx-auto min-h-[120px] flex flex-col justify-center overflow-hidden '>
                <h3 className='text-xl md:text-2xl py-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>{images[activeIndex].title }</h3>
                <p className='my-2'>{images[activeIndex].text}</p>
              </div>
          </div>
        </section>

      </main>
    </div>
  );
}
