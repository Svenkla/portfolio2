import profile from "../photos/profile.svg";
import web from "../photos/web.svg";
import skills from "../photos/skills.svg";
import contact from "../photos/contact.svg";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // JavaScript pogoj
  const isCurrentPage = (path: any) => location.pathname === path;

  return (
    <div className="header">
      <div className="profile">
        <Link to="/" className={`link ${isCurrentPage("/") ? "active" : ""}`}>
          <div>Portfolio</div>
        </Link>
      </div>

      <div className="more">
        <ul>
          <li>
            <Link
              to="/about"
              className={`link ${isCurrentPage("/about") ? "active" : ""}`}
            >
              <img src={profile} alt="profile" width={15} />
              About
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className={`link ${isCurrentPage("/skills") ? "active" : ""}`}
            >
              <img src={skills} alt="profile" width={15} />
              Skills
            </Link>
          </li>

          <li>
            <Link
              to="/projects"
              className={`link ${isCurrentPage("/projects") ? "active" : ""}`}
            >
              <img src={web} alt="profile" width={15} />
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`link ${isCurrentPage("/contact") ? "active" : ""}`}
            >
              <img src={contact} alt="profile" width={15} />
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
