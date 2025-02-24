import Project from '../components/Project';
import Memoji from '../assets/images/Memoji.png';
import '../App.css'
import { useEffect } from 'react';
import SkillsSection from '../components/SkillsSection';
import SectionDivider from '../components/SectionDivider';

const data = [{
  title: 'Phoebe\'s Flowers',
  link: 'https://github.com/MichaelaHunt/Phoebes-Flowers-MERN',
  description: 'A e-commerce website for an imaginary floral arrangement and delivery company built using the MERN stack.',
  uses: ['HTML', 'CSS', 'Typescript', 'React', 'MongoDB', 'Mongoose ORM', 'JWT', 'GraphQL', 'Vite'],
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
  title: 'README Gen.',
  link: 'https://github.com/MichaelaHunt/ReadMe-Generator',
  description: 'A handy terminal-based program that makes writing a professional-grade README fast and easy.',
  uses: ['Node.js', 'Javascript'],
  index: 3
},
{
  title: 'Chartz',
  link: 'https://github.com/MichaelaHunt/Chartz',
  description: 'A website that combine\'s ITunes and Genius public API to give the user lyrics to the current top charting songs.',
  uses: ['HTML', 'CSS', 'Javascript', 'React', 'API', 'Typescript', "PostgreSQL", "Sequelize", "JWT", "Authentication", 'Vite'],
  index: 4
},
];

const designData = [
  {
    title: 'Phoebe\'s Flowers',
    imageLink: '',
    figmaLink: 'https://www.figma.com/design/qJeYYJgBf7G2awehDOBNhD/Phoebe\'s-Flowers?node-id=147-194&t=iI4l6Wv4kegUzGlI-1',
    description: 'Phoebe\'s Flowers original design! See the Coded version for the final product.',
    index: 1
  },
  {
    title: 'Chartz',
    imageLink: '',
    figmaLink: '',
    description: 'Chartz original design. See the Coded version for the final product.',
    index: 2
  },
  {
    title: 'Cloud File Storage',
    imageLink: '',
    figmaLink: 'https://www.figma.com/design/xzEJVcpkYlH92BfKbDCnei/Digital-Plan-Room?node-id=3-14&t=bYRgJgqrAQuqZg3M-1',
    description: 'A re-design requested in 2023. Logos are covered up for privacy. My favorite design I\'ve made.',
    index: 3
  },
  {
    title: 'Chartz',
    imageLink: '',
    figmaLink: '',
    description: '',
    index: 2
  },
  {
    title: 'Chartz',
    imageLink: '',
    figmaLink: '',
    description: '',
    index: 2
  },
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
    console.log(`Browser width: ${window.innerWidth / 16}rem`);
  }, []);

  return (
    <>
      {/*Introduction*/}
      <div className='main'>{/*Main*/}
        <div className='card mainCard row'>
          <div className='column'>
            <a className='introLinks' href='https://github.com/MichaelaHunt'>
              <i className="fa-brands fa-square-github"></i>
            </a>
            <a className='introLinks' href='https://www.linkedin.com/in/michaela-hunt'>
              <i className="fa-brands fa-linkedin"></i>
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
      {/*About Me*/}
      <SectionDivider sectionId='aboutMeSection' name='About Me'></SectionDivider>
      <div className='row aboutMe'>
        <h1 className='handAnimated'>👋</h1>
        <div className='card aboutMeCard'>
          <p>Hi! I’m a software engineer with a passion for <span>web development</span> and <span>UX/UI Design</span>. I hold <span>two bachelor's degrees</span>: one in <span>Computer Science</span> and another in <span>Graphic Design</span>! The majority of my experience is in <span>React, JavaScript, and .NET</span>.</p>
        </div>
      </div>
      {/*Skills*/}
      <SectionDivider sectionId='skillsSection' name='Skills'></SectionDivider>
      <div className='comingSoonSection'>
        <SkillsSection></SkillsSection>
      </div>
      {/*Portfolio*/}
      <SectionDivider sectionId='portfolioSection' name='Coding Portfolio'></SectionDivider>
      <div className='projectContainer'>{/*Container*/}
        {data.map((item, i) => (
          <Project key={i} ProjectProps={data[i]}></Project>
        ))}
      </div>
      {/* Design Portfolio */}
      <SectionDivider sectionId='designSection' name='Design Portfolio'></SectionDivider>
      <div className='projectContainer'>
        {/* {data.map((item, i) => (
          <Project key={i} ProjectProps={data[i]}></Project>
        ))} */}
        <h2 style={{marginBottom: "5rem"}}>Coming Soon!</h2>
      </div>

      {/* Design Portfolio Ends */}
    </>
  )
}

export default Home;