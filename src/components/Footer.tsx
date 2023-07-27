import home from "../photos/home.svg";
import profile from "../photos/profile.svg";
import web from "../photos/web.svg";
import skills from "../photos/skills.svg";
import contact from "../photos/contact.svg";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  // JavaScript pogoj
  const isCurrentPage = (path: any) => location.pathname === path;

  return (
    <div className="footer">
      <ul>
        <li>
          <Link to="/" className={`link ${isCurrentPage("/") ? "active" : ""}`}>
            <img src={home} alt="home" width={28} />
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`link ${isCurrentPage("/about") ? "active" : ""}`}
          >
            <img src={profile} alt="profile" width={28} />
          </Link>
        </li>
        <li>
          <Link
            to="/skills"
            className={`link ${isCurrentPage("/skills") ? "active" : ""}`}
          >
            <img src={skills} alt="profile" width={28} />
          </Link>
        </li>

        <li>
          <Link
            to="/projects"
            className={`link ${isCurrentPage("/projects") ? "active" : ""}`}
          >
            <img src={web} alt="profile" width={28} />
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className={`link ${isCurrentPage("/contact") ? "active" : ""}`}
          >
            <img src={contact} alt="profile" width={28} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
