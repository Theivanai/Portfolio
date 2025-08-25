import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiRedux, SiBootstrap } from "react-icons/si";
import "./Skills.css";

function Skills() {
    const frontendSkills = [
        { name: "HTML5", icon: <FaHtml5 color="#e34c26" size={50} /> },
        { name: "CSS3", icon: <FaCss3Alt color="#264de4" size={50} /> },
        { name: "JavaScript", icon: <FaJs color="#f0db4f" size={50} /> },
        { name: "Bootstrap 5", icon: <SiBootstrap color="#7952b3" size={50} /> },
        { name: "React.js", icon: <FaReact color="#61dbfb" size={50} /> },
        { name: "Redux", icon: <SiRedux color="#764abc" size={50} /> },
    ];

    const backendSkills = [
        { name: "Node.js", icon: <FaNodeJs color="#68a063" size={50} /> },
    ];

    const databaseSkills = [
        { name: "MongoDB", icon: <SiMongodb color="#4db33d" size={50} /> },
        { name: "SQL / Database", icon: <FaDatabase color="#00758f" size={50} /> },
    ];

    const renderSkills = (title, skills) => (
        <div className="skills-block">
            <h4 className="skills-subtitle">{title}</h4>
            <div className="skills-grid">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        {skill.icon}
                        <p className="skill-name">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    return (
        <section className="skills-section">
            <h3 className="skills-title">SKILLS</h3>
            {renderSkills("FRONTEND", frontendSkills)}
            {renderSkills("BACKEND", backendSkills)}
            {renderSkills("DATABASE", databaseSkills)}
        </section>
    );
}

export default Skills;
