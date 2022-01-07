import React from "react";

//Featured Companies
import kodak from "../images/kodak.svg";
import hasselblad from "../images/hasselblad.svg";
import pentax from "../images/pentax.svg";

// Socials
import twitter from "../images/twitter.svg";
import instagram from "../images/instagram.svg";

const featured = [
  { name: "Hasselblad", image: hasselblad, id: 1 },
  { name: "Kodak", image: kodak, id: 2 },
  { name: "Pentax", image: pentax, id: 3 },
];

const Footer = () => {
  return (
    <footer>
      <div className="featured-companies">
        <div className="container">
          <ul>
            {featured.map(({ name, image, id }) => (
              <li key={id}>
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
            <a href="/">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/mones.r/" target="_blank">
              <img src={instagram} alt="Instagram" />
            </a>
          </div>
          <span>rodrigomones@gmail.com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
