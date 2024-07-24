import styles from "./navbar.module.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import Mobilenav from "./Mobilenav";
import { Link } from "react-scroll";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <Mobilenav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className={styles.navWrapper}>
        <div className={styles.navContent}>
          <img src={logo} alt="My Portfolio" className={styles.logo} />
          <ul>
            <li>
              <Link
                activeClass={styles.active}
                to="hero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={styles.menuItem}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass={styles.active}
                to="skills"
                spy={true}
                smooth={true}
                offset={-200}
                duration={500}
                className={styles.menuItem}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                activeClass={styles.active}
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={styles.menuItem}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass={styles.active}
                to="contactme"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className={styles.menuItem}
              >
                Contact Me
              </Link>
            </li>
            <button
              className={styles.contactBtn}
              onClick={() => {
                document
                  .getElementById("contactme")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Hire Me
            </button>
          </ul>

          <button className={styles.menuBtn} onClick={toggleMenu}>
            <span
              class={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}
