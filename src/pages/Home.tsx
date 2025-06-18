import slika from "../photos/slika.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <div className="info">
        <div className="info-text">
          <h1>Hi, I'm Sven Pliberšek</h1>
          <h3>Full-Stack Developer</h3>

          <p>
            I am a computer science student with a strong interest in software
            development and full-stack web development. I have hands-on
            experience with various programming languages and enjoy building
            functional and user-friendly web applications. I have already
            completed several personal projects, which you can find on my
            portfolio (Projects).
          </p>
        </div>

        <div className="info-slika">
          <img src={slika} alt="slika" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
