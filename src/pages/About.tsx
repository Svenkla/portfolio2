import Navbar from "../components/Navbar";
import html from "../photos/html.svg";
import css from "../photos/css.svg";
import react from "../photos/react.svg";
import js from "../photos/js.svg";
import typ from "../photos/typ.svg";
import mysql from "../photos/mysql.svg";
import mongo from "../photos/mongo.svg";
import py from "../photos/py.svg";
import c from "../photos/c.png";
import next from "../photos/next.svg";
import vs from "../photos/vs.svg";
import postgre from "../photos/postgre.svg";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="about-main">
      <Navbar />
      <div className="abouth4">
        <h4>About me</h4>
      </div>

      <div className="about">
        <div className="about-text">
          <div>
            I recently completed a computer engineering program in Maribor,
            Slovenia, and I'm thrilled to be a junior Front-End developer.
          </div>
          <br />
          <div>
            I'm known for being well-organized, hardworking, and always getting
            things done on time. I enjoy tackling challenges head-on. I
            genuinely love programming, and it's not just a job for me-it's a
            passion that drives me to constantly learn and improve.
          </div>
          <br />
          <div>
            When I'm not coding, you'll often find me on cycle. Staying active
            and maintaining a healthy lifestyle are important to me. I also
            enjoy exploring various hobbies and activities during my free time,
            always seeking new experiences outside of work and school.
          </div>
          <br />
          <div>
            I have a strong interest in Front-End technologies and I'm
            continuously expanding my skills by working on different projects. I
            believe in the power of lifelong learning and staying up-to-date
            with the latest trends and advancements in the field.
          </div>
          <br />
          <div>
            In summary, I'm an enthusiastic Front-End developer who is committed
            to creating amazing user experiences. With my dedication,
            problem-solving mindset, and a love for continuous learning, I'm
            eager to take on new challenges and contribute to exciting projects.
          </div>
        </div>

        <div className="about-images">
          <ul>
            <li>
              <img src={html} alt="html" />
            </li>
            <li>
              <img src={css} alt="html" />
            </li>
            <li>
              <img src={react} alt="html" />
            </li>
          </ul>
          <ul>
            <li>
              <img src={js} alt="html" />
            </li>
            <li>
              <img src={typ} alt="html" />
            </li>
            <li>
              <img src={mysql} alt="html" />
            </li>
          </ul>
          <ul>
            <li>
              <img src={mongo} alt="html" />
            </li>
            <li>
              <img src={py} alt="html" />
            </li>
            <li>
              <img src={c} alt="html" />
            </li>
          </ul>
          <ul>
            <li>
              <img src={next} alt="html" />
            </li>
            <li>
              <img src={vs} alt="html" />
            </li>
            <li>
              <img src={postgre} alt="html" />
            </li>
          </ul>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
