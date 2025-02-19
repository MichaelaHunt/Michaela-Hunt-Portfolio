

const devSkills = [
    "Bootstrap",
    "CSS",
    "HTML",
    "JavaScript",
    "TypeScript",
    "React",
    ".NET",
    "Node",
    "Express",
    "Python",
    "MySQL Server",
    "Entity Frameworks",
    "PostgreSQL",
    "MongoDB",
    "Mongoose",
    "GraphQL",
    "GitHub",
    "Azure Dev Ops",
    "RESTful APIs",
    "Vite",
    "MVC",
    "LucidChart",
];
const designSkills = [
    "Figma",
    "Adobe Illustrator",
    "Adobe Photoshop",
    "Adobe InDesign",
    "Procreate",
];


function SkillsSection() {


    return (
        <>
            <div className="column">
                <div className="blueBorder column" style={{marginBottom: "32px"}}>
                    <h2>Coding:</h2>
                    <div className="skillsContainer">
                        {devSkills.map(item => (
                            <div key={item.toString()} className="skillTag">
                                <h3>{item}</h3>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="blueBorder column">
                    <h2>Graphic Design:</h2>
                    <div className="skillsContainer">
                        {designSkills.map(item => (
                            <div key={item.toString()} className="skillTag">
                                <h3>{item}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SkillsSection;