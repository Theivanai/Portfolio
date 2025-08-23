import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Home.css";

function Home() {
    return (
        <div className="home-container">

            {/* Heading */}
            <motion.h1
                className="home-heading"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <span>Hi! I'm Theivanai</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
                className="home-subheading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
            >
                Front-End Developer | React | MERN
            </motion.p>

            {/* Resume Button */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <a
                    href="https://drive.google.com/file/d/14uULBY2eKVQfYtIBvlW8Uu2Zn3DlDYRA/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume"
                >
                    Download Resume
                </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
                className="social-container"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <a href="mailto:theivanai3004@gmail.com" className="social-icons mail">
                    <FaEnvelope />
                </a>
                <a href="https://github.com/Theivanai" target="_blank" rel="noreferrer" className="social-icons github">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/theivanai-durairaj/" target="_blank" rel="noreferrer" className="social-icons linkedin">
                    <FaLinkedin />
                </a>
            </motion.div>
        </div>
    );
}

export default Home;
