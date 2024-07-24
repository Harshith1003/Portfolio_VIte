import "./mobileNav.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

export default function Mobilenav({ isOpen, toggleMenu }) {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img src={logo} alt="" className="logo" />

          <ul>
            <li>
              <Link
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="menu-item"
                onClick={() => toggleMenu()}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-550}
                duration={500}
                className="menu-item"
                onClick={() => toggleMenu()}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="menu-item"
                onClick={() => toggleMenu()}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contactme"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="menu-item"
                onClick={() => toggleMenu()}
              >
                Contact Me
              </Link>
            </li>
            <button
              className="contact-btn"
              onClick={() => {
                document
                  .getElementById("contactme")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
}
