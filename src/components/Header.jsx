import React from "react";
import { Link } from "react-scroll";
import "../styles/restStyles/Header.css";
import logo from "../img/image.png";

const Header = () => {
  return (
    <header className="header">
      <Link to="offer" smooth={true} duration={500} >
        <img src={logo} alt="logo" className="logo"/>
      </Link>
      <nav>
        <ul>
          <li><Link to="offer" smooth duration={500}>Offer</Link></li>
          <li><Link to="about" smooth duration={500}>About us</Link></li>
          <li><Link to="advantages" smooth duration={500}>Advantages</Link></li>
          <li><Link to="services" smooth duration={500}>Servises</Link></li>
          <li><Link to="reviews" smooth duration={500}>Backshots</Link></li>
          <li><Link to="contact" smooth duration={500}>Contacts</Link></li>
          <li><Link to="booking" smooth duration={500}>Get that bitch</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
