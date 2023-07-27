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
          <h3>Frontend Developer</h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis esse
            culpa ipsa architecto sunt, numquam unde possimus, fugit harum
            deleniti, distinctio reiciendis facilis dolores laborum hic
            dignissimos illum sit provident.
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
