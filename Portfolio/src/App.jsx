import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Memoji from './assets/images/Memoji.png';
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='headerContainer card'>
        {/*Logo link to home page here...*/}
        <ul>
          <li>About Me</li>
          <li>Portfolio</li>
          <li>Contact Me</li>
          <li>Resume</li>
        </ul>
      </div>
      <div className='main'>{/*Main*/}
        <div className='card mainCard row'>
          <div className='column'>
            <i className="fa-brands fa-square-github" style={{ marginBottom: '27px' }}></i>
            <i className="fa-brands fa-linkedin" style={{ marginBottom: '27px' }}></i>
            <i className="fa-solid fa-square-envelope"></i>
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
      <div className='row divider'>{/*Divider*/}
        <div className='horizontalLine'></div>
        <h3>About Me</h3>
        <div className='horizontalLine'></div>
      </div>
      <div className='row aboutMe'>{/*About Me*/}
        {/*Waving hand animation*/}
        <h1 style={{ fontSize: '128px' }}>👋</h1>
        {/*Card*/}
        <div className='card aboutMeCard'>
          <p>Hi! I’m a software engineer with a passion for <span>web development</span> and <span>UX/UI Design</span>. I hold <span>two bachelor's degrees</span>: one in <span>Computer Science</span> and another in <span>Graphic Design</span>! The majority of my experience is in <span>React and .NET</span>.</p>
        </div>
      </div>
      <div className='row divider'>{/*Divider*/}
        <div className='horizontalLine'></div>
        <h3>Skills</h3>
        <div className='horizontalLine'></div>
      </div>
      <div>{/*Skills*/}
        <div>
          <p>Coming soon!</p>
        </div>
      </div>
      <div className='row divider'>{/*Divider*/}
        <div className='horizontalLine'></div>
        <h3>Portfolio</h3>
        <div className='horizontalLine'></div>
      </div>
      <div>{/*Portfolio*/}
        {/*Loop thru projects!*/}
      </div>
    </>
  )
}

export default App
