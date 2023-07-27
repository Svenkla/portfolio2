import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import weatherapp from "../photos/weatherapp.png";
import chatapp from "../photos/chat-app.png";
import todo from "../photos/todo.png";
import createpost from "../photos/createpost.png";
import movieapp from "../photos/movieapp.png";
import restaurant from "../photos/restaurant.png";
import tracker from "../photos/tracker.png";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <div>
      <Navbar />

      <div className="projectsh4">
        <h4>Projects</h4>
      </div>

      <div className="projects">
        <div className="project-card">
          <h4>Weather App</h4>
          <Link to="https://weather-app-one-tan-23.vercel.app">
            <img src={weatherapp} alt="weatherapp" />
          </Link>
        </div>

        <div className="project-card">
          <h4>Chat App</h4>
          <Link to="https://chat-app-sven.vercel.app">
            <img src={chatapp} alt="chatapp" />
          </Link>
        </div>

        <div className="project-card">
          <h4>ToDo App</h4>
          <Link to="https://to-do-app-sven.vercel.app/">
            <img src={todo} alt="todo" />
          </Link>
        </div>

        <div className="project-card">
          <h4>CreatePost App</h4>
          <Link to="https://input-output-text-sven.vercel.app/">
            <img src={createpost} alt="createpost" />
          </Link>
        </div>

        <div className="project-card">
          <h4>Movie App</h4>
          <Link to="https://movie-app-sven.vercel.app/">
            <img src={movieapp} alt="movieapp" />
          </Link>
        </div>

        <div className="project-card">
          <h4>Restaurant App</h4>
          <Link to="https://restaurant-sven.vercel.app/">
            <img src={restaurant} alt="restaurant" />
          </Link>
        </div>

        <div className="project-card">
          <h4>Tracker App</h4>
          <Link to="https://rate-tracker-sven.vercel.app/">
            <img src={tracker} alt="tracker" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
