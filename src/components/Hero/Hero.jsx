import img01 from "../../assets/img01.png";
import img02 from "../../assets/img02.png";
import img03 from "../../assets/img03.png";
import img04 from "../../assets/img04.png";
import img11 from "../../assets/img11.png";
import "./hero.css";

export default function Hero() {
  return (
    <section name="hero" className="hero-container">
      <div className="hero-content">
        <div className="wrapper">
          <h1 className="content">
            Hi, I'm Harshith
            <ol>
              <li>
                <span>a Coder</span>
              </li>
              <li>
                <span>a Web Developer</span>
              </li>
              <li>
                <span>a Frontend Developer</span>
              </li>
            </ol>
          </h1>
          <p>
            Passionate Frontend Developer | Transforming Ideas into Seamless and
            Visually Stunning Web Solutions
          </p>
        </div>
        {/* <h2>Buliding Digital Experiences That Inspire</h2>
        <p>
          
        </p> */}
      </div>
      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src={img01} alt="" />
          </div>
          <img src={img11} alt="" />
        </div>

        <div>
          <div className="tech-icon">
            <img src={img02} alt="" />
          </div>
          <div className="tech-icon">
            <img src={img03} alt="" />
          </div>
          <div className="tech-icon">
            <img src={img04} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
