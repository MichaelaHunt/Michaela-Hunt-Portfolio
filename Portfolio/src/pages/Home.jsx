import Project from '../components/Project';
import Memoji from '../assets/images/Memoji.png';
import '../App.css'
import Header from '../components/Header'
import { useEffect } from 'react';

const data = [{
  title: 'Phoebe\'s Flowers',
  link: 'https://github.com/MichaelaHunt/Phoebes-Flowers-Copy',
  description: 'A front-end example of an e-commerce website for a floral arrangement and delivery company.',
  uses: ['HTML', 'CSS', 'Javascript', 'Bootstrap'],
  index: 1
},
{
  title: 'Frosty Knows',
  link: 'https://github.com/MichaelaHunt/FrostyKnows',
  description: 'A website that utilizes OpenWeather\'s public API to get up-to-date weather for any location you specify.',
  uses: ['HTML', 'CSS', 'Javascript', 'API', 'Typescript'],
  index: 2
},
{
  title: 'README Generator',
  link: 'https://github.com/MichaelaHunt/ReadMe-Generator',
  description: 'A handy terminal-based program that makes writing a professional-grade README fast and easy.',
  uses: ['Node.js', 'Javascript'],
  index: 3
},
{
  title: 'Frosty Knows',
  link: 'https://github.com/MichaelaHunt/FrostyKnows',
  description: 'A website that utilizes OpenWeather\'s public API to get up-to-date weather for any location you specify.',
  uses: ['HTML', 'CSS', 'Javascript', 'API', 'Typescript'],
  index: 4
},
{
  title: 'Frosty Knows',
  link: 'https://github.com/MichaelaHunt/FrostyKnows',
  description: 'A website that utilizes OpenWeather\'s public API to get up-to-date weather for any location you specify.',
  uses: ['HTML', 'CSS', 'Javascript', 'API', 'Typescript'],
  index: 5
},
{
  title: 'Frosty Knows',
  link: 'https://github.com/MichaelaHunt/FrostyKnows',
  description: 'A website that utilizes OpenWeather\'s public API to get up-to-date weather for any location you specify.',
  uses: ['HTML', 'CSS', 'Javascript', 'API', 'Typescript'],
  index: 6
}
]

function Home() {
    const workEmail = 'micapplehunt@gmail.com';

  function copyEmailToClipboard() {
    navigator.clipboard.writeText(workEmail)
      .then(() => {
        alert("Email copied to clipboard!");
      })
      .catch(err => {
        alert("Failed to copy email to clipboard :( \nEmail is: micapplehunt@gmail.com");
      });
  }

  useEffect(() => {//For dev purposes, TODO: remove after responsive
    console.log(`Browser width: ${window.innerWidth}px`);
  }, []);

  return (
    <>
      {/*Introduction*/}
      <div className='main'>{/*Main*/}
        <div className='card mainCard row'>
          <div className='column'>
            <a className='introLinks' href='https://github.com/MichaelaHunt'>
              <i className="fa-brands fa-square-github" style={{ marginBottom: '27px' }}></i>
            </a>
            <a className='introLinks' href='https://www.linkedin.com/in/michaela-hunt'>
              <i className="fa-brands fa-linkedin" style={{ marginBottom: '27px' }}></i>
            </a>
            <a className='introLinks' onClick={copyEmailToClipboard}>
              <i className="fa-solid fa-square-envelope"></i>
            </a>

          </div>
          <div className='verticalLine'></div>
          <div className='mainCardText'>
            <h1>Michaela Hunt</h1>
            <h3>Web Developer, UX/UI Designer</h3>
            <p>A skilled full stack developer who is passionate about implementing clever, functional, and intuitive designs into websites.</p>
          </div>
        </div>
        <img className='memoji' src={Memoji}></img>
      </div>
      {/*Introduction End*/}
      {/*About Me*/}
      <div className='row divider' id='aboutMeSection'>{/*Divider*/}
        <div className='horizontalLine'></div>
        <h3>About Me</h3>
        <div className='horizontalLine'></div>
      </div>
      <div className='row aboutMe'>
        <h1 className='handAnimated'>👋</h1>
        <div className='card aboutMeCard'>
          <p>Hi! I’m a software engineer with a passion for <span>web development</span> and <span>UX/UI Design</span>. I hold <span>two bachelor's degrees</span>: one in <span>Computer Science</span> and another in <span>Graphic Design</span>! The majority of my experience is in <span>React and .NET</span>.</p>
        </div>
      </div>
      {/*About Me End*/}
      {/*Skills*/}
      <div className='row divider' id='skillsSection'>{/*Divider*/}
        <div className='horizontalLine'></div>
        <h3>Skills</h3>
        <div className='horizontalLine'></div>
      </div>
      <div className='comingSoonSection'>
        <div className='card comingSoon'>
          <h2>Coming soon!</h2>
        </div>
      </div>
      {/*Skills End*/}
      {/*Portfolio*/}
      <div className='row divider' id='portfolioSection'>{/*Divider*/}
        <div className='horizontalLine'></div>
        <h3>Portfolio</h3>
        <div className='horizontalLine'></div>
      </div>
      <div className='projectContainer'>{/*Container*/}
        {data.map((item, i) => (
          <Project key={i} ProjectProps={data[i]}></Project>
        ))}
      </div>
      {/*Portfolio End*/}
    </>
  )
}

export default Home;