import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import { FaReact, FaNodeJs, FaDatabase, FaLaptopCode } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-section">
      <motion.div
        className="about-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div>
          <h3 className="about-heading">ABOUT ME</h3>

          <p className="about-text">
            Hi, I'm <strong>Theivanai</strong>, a passionate{" "}
            <strong>Front-End Developer</strong> with expertise in building
            dynamic, responsive, and user-friendly applications using{" "}
            <strong>React.js, JavaScript, HTML, CSS</strong>, along with backend
            skills in <strong>Node.js, Express, and MongoDB.</strong>
          </p>

          <p className="about-text">
            I admire on crafting clean, performant, and visually appealing
            solutions that solve real-world problems.
          </p>

          {/* Skill Highlights */}
          <div className="skills-grid">
            <motion.div whileHover={{ scale: 1.05 }} className="skill-card">
              <FaReact size={36} color="#61DBFB" />
              <span>REACT AND MERN STACK</span>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="skill-card">
              <FaLaptopCode size={36} color="#007bff" />
              <span>RESPONSIVE DESIGN</span>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="skill-card">
              <FaNodeJs size={36} color="#3C873A" />
              <span>NODE.JS AND EXPRESS</span>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="skill-card">
              <FaDatabase size={36} color="#f39c12" />
              <span>MONGO DB AND DATABASES</span>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default About;

