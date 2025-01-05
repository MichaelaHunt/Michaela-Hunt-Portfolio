import { useState } from 'react'
import UsedLabel from './UsedLabel';
import './Components.css';


// ProjectProps => {
//     title,
//         link,
//         description,
//         uses,
//         index
// }

function Project({ ProjectProps }) {
    const [projectHover, setProjectHover] = useState(false);

    function changeProjectStyles() {
        setProjectHover(!projectHover);
        // console.log(projectHover);

        let title = document.getElementById(`title${ProjectProps.index}`);
        let background = document.getElementById(`background${ProjectProps.index}`);
        let link = document.getElementById(`link${ProjectProps.index}`);
        let description = document.getElementById(`description${ProjectProps.index}`);

        if (!projectHover) {//the state change is scheduled for the end of the function execution
            title.style.color = 'White';
            background.style.backgroundColor = 'var(--accent-blue)';
            description.style.display = "none";
            link.style.color = 'white';
            //set uses to inline-block

        } else {
            title.style.color = 'var(--accent-blue)';
            background.style.backgroundColor = 'var(--card-grey)';
            description.style.display = "block";
            link.style.color = 'grey';
            //set uses to none 
        }
    }

    return (
        <>
            <div className='card projectCard' id={`background${ProjectProps.index}`} onMouseOver={changeProjectStyles} onMouseLeave={changeProjectStyles}>{/*Project Card*/}
                <div className='row projectRow'>
                    <h2 id={`title${ProjectProps.index}`}>{ProjectProps.title}</h2>
                    <a href={ProjectProps.link}>
                        <i id={`link${ProjectProps.index}`} className="fa-solid fa-link projectLink"></i>
                    </a>
                </div>
                <div className='usesContainer' style={{ display: projectHover ? 'inline-block' : 'none' }}>
                    {ProjectProps.uses.map((item, i) => (
                        <UsedLabel key={i} name={item}></UsedLabel>
                    ))}
                </div>
                <p id={`description${ProjectProps.index}`}>{ProjectProps.description}</p>
            </div>
        </>
    )
}

export default Project