import React from "react";
import { Link } from "gatsby";

//Featured Companies
import kodak from "../images/kodak.svg";
import hasselblad from "../images/hasselblad.svg";
import pentax from "../images/pentax.svg";

// Socials
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";

const featured = [
  { name: "Hasselblad", image: hasselblad },
  { name: "Kodak", image: kodak },
  { name: "Pentax", image: pentax },
];

const Footer = () => {
  return (
    <footer>
      <div className="featured-companies">
        <div className="container">
          <ul>
            {featured.map(({ name, image }) => (
              <li key="name">
                <img src={image} alt={name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer">
        <div className="inner">
          <span>© 2021 Rodrigo Monés</span>
          <div className="socials">
            <Link href="/">
              <img src={twitter} alt="Twitter" />
            </Link>
            <Link href="https://www.instagram.com/mones.r/" target="_blank">
              <img src={instagram} alt="Instagram" />
            </Link>
          </div>
          <span>rodrigomones@gmail.com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
