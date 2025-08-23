// import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// function Footer() {
//     return (
//         <footer style={{ background: "aliceblue", color: "#000", padding: "2rem", textAlign: "center", marginTop: '35rem' }}>
//             <p>© {new Date().getFullYear()} Theivanai Durairaj | All Rights Reserved</p>
//             <div style={{ marginTop: "0.5rem" }}>
//                 <a
//                     href="https://github.com/yourgithub"
//                     target="_blank"
//                     rel="noreferrer"
//                     style={{ color: "#000", margin: "0 10px" }}
//                 >
//                     <FaGithub size={20} />
//                 </a>
//                 <a
//                     href="https://linkedin.com/in/theivani-durairaj"
//                     target="_blank"
//                     rel="noreferrer"
//                     style={{ color: "#000", margin: "0 10px" }}
//                 >
//                     <FaLinkedin size={20} />
//                 </a>
//                 <a
//                     href="mailto:theivanai3004@gmail.com"
//                     style={{ color: "#000", margin: "0 10px" }}
//                 >
//                     <FaEnvelope size={20} />
//                 </a>
//             </div>
//         </footer>
//     );
// }

// export default Footer;


import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Theivanai Durairaj | All Rights Reserved</p>
            <div className="footer-icons">
                <a
                    href="https://github.com/yourgithub"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link"
                >
                    <FaGithub size={20} />
                </a>
                <a
                    href="https://linkedin.com/in/theivani-durairaj"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link"
                >
                    <FaLinkedin size={20} />
                </a>
                <a
                    href="mailto:theivanai3004@gmail.com"
                    className="footer-link"
                >
                    <FaEnvelope size={20} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
