import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <p>© {new Date().getFullYear()} Theivanai Durairaj | All Rights Reserved</p>
            <div className="footer-icons">
                <a
                    href="mailto:theivanai3004@gmail.com"
                    className="footer-link"
                >
                    <FaEnvelope size={20} />
                </a>
                <a
                    href="https://github.com/Theivanai"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link"
                >
                    <FaGithub size={20} />
                </a>
                <a
                    href="https://www.linkedin.com/in/theivanai-durairaj/"
                    target="_blank"
                    rel="noreferrer"
                    className="footer-link"
                >
                    <FaLinkedin size={20} />
                </a>

            </div>
        </footer>
    );
}

export default Footer;
