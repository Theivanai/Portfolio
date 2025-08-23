import proimg1 from "../Assests/proimg1.png";
import proimg2 from "../Assests/proimg2.png";
import proimg3 from "../Assests/proimg3.png";
import './Project.css';

const projects = [
    {
        title: "Library Management System",
        description:
            "A full-stack web application for managing books, users, and transactions in a library. Includes admin and user roles with authentication.",
        tech: ["MERN Stack"],
        link: "https://github.com/Theivanai/Online-Library-Management-System",
        image: proimg1,
    },
    {
        title: "Furniture E-commerce",
        description:
            "An e-commerce platform where users can browse, search, and purchase furniture items. Includes cart and payment integration.",
        tech: ["React", "MongoDB"],
        link: "https://github.com/Theivanai/Furniture",
        image: proimg2,
    },
    {
        title: "FoodieHive",
        description:
            "A food delivery web app where users can explore restaurants, add items to the cart, and place online orders with real-time updates.",
        tech: ["React", "MongoDB"],
        link: "https://github.com/Theivanai/FoodieHive",
        image: proimg3,
    },
];

function Projects() {
    return (
        <div id="projects" className="projects-section">
            <div className="container-fluid">
                <h3 className="section-title text-center">PROJECTS</h3>

                <div className="row g-4">
                    {projects.map((project, index) => (
                        <div key={index} className="col-md-4 col-sm-6 col-12">
                            <div className="project-card card h-100 shadow-sm border-0">
                                <div className="card-img-top overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="project-image"
                                    />
                                </div>

                                <div className="card-body d-flex flex-column">
                                    <h3 className="project-title h5 text-center">{project.title}</h3>
                                    <p className="project-description text-center mb-3">
                                        {project.description}
                                    </p>

                                    <div className="tech-badges mb-3 text-center">
                                        {project.tech.map((tech, i) => (
                                            <span key={i} className="badge bg-primary me-1 mb-1">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="github-btn btn btn-dark mt-auto align-self-center"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
