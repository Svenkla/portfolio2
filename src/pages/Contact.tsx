import Navbar from "../components/Navbar";
import call from "../photos/call.svg";
import contact from "../photos/contact.svg";
import location from "../photos/location.svg";
import github from "../photos/github.svg";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className="contact-main">
      <Navbar />

      <div className="contacth4">
        <h4>Contact</h4>
      </div>

      <div className="contact">
        <div className="contact-card">
          <div className="isto">
            <img src={contact} alt="email" width={40} /> <p>EMAIL</p>
          </div>

          <p>sven.plibersek@gmail.com</p>
        </div>

        <div className="contact-card">
          <div className="isto">
            <img src={call} alt="call" width={40} /> <p>PHONE</p>
          </div>

          <p>041/963-883</p>
        </div>

        <div className="contact-card">
          <div className="isto">
            <img src={location} alt="location" width={40} /> <p>LOCATION</p>
          </div>

          <p>Maribor</p>
        </div>
      </div>

      <div className="contact-spodaj">
        <div>
          <Link to="https://github.com/Svenkla?tab=repositories">
            <img src={github} alt="github" width={40} />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
