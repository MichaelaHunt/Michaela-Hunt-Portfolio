import { useState } from 'react'
import UsedLabel from './UsedLabel';


ProjectCardProps => {
    title,
    link,
    description,
    uses
}

function ProjectCard({ ProjectCardProps }) {
    const [projectHover, setProjectHover] = useState(false);

    function changeProjectStyles() {
        setProjectHover(!projectHover);
        console.log(projectHover);

        let title = document.getElementById('title');
        let background = document.getElementById('background');
        let link = document.getElementById('link');
        let description = document.getElementById('description');

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
            <div className='card projectCard' id='background' onMouseOver={changeProjectStyles} onMouseLeave={changeProjectStyles}>{/*Project Card*/}
                <div className='row projectRow'>
                    <h2 id='title'>{ProjectCardProps.title}</h2>
                    <a href={ProjectCardProps.link}>
                        <i id='link' className="fa-solid fa-link projectLink"></i>
                    </a>
                </div>
                {/*Loop here thru uses*/}
                <div className='usesContainer' style={{ display: projectHover ? 'inline-block' : 'none' }}>
                    <UsedLabel name='CSS'></UsedLabel>
                    <UsedLabel name='HTML'></UsedLabel>
                    <UsedLabel name='Javascript'></UsedLabel>
                </div>
                <p id='description'>{ProjectCardProps.description}</p>
            </div>
        </>
    )
}

export default ProjectCard