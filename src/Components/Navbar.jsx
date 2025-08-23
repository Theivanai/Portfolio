// import React, { useState } from "react";
// import "./Navbar.css";
// import { Link, useLocation } from "react-router-dom";
// import { FaBars, FaTimes } from "react-icons/fa";
// // import { FaHome, FaUser, FaCode, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

// function Navbar() {
//     const location = useLocation();
//     const [menuOpen, setMenuOpen] = useState(false);

//     const navItems = [
//         { path: "/", label: "HOME" },
//         { path: "/about", label: "ABOUT ME" },
//         { path: "/skills", label: "SKILLS" },
//         { path: "/projects", label: "PROJECTS" },
//         { path: "/contact", label: "CONTACT" },
//     ];

//     return (
//         <nav className="navbar">

//             <Link to="/" className="name">Theivanai</Link>

//             {/* Hamburger toggle (mobile only) */}
//             <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
//                 {menuOpen ? <FaTimes /> : <FaBars />}
//             </div>

//             <div className={`nav-links ${menuOpen ? "open" : ""}`}>
//                 {navItems.map((item) => (
//                     <Link
//                         key={item.path}
//                         to={item.path}
//                         className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
//                         onClick={() => setMenuOpen(false)} // close menu on link click
//                     >
//                         {item.icon}
//                         {item.label}
//                     </Link>
//                 ))}
//             </div>
//         </nav>
//     );
// }

// export default Navbar;



import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar fixed-top">
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
