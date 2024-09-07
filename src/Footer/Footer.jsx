import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import twitter from "./assets/twitter.png";

import "./Footer.css";

export default function Footer() {
  return (
    <>
      <hr></hr>
      <footer className="footer-container">
        <div className="logo-social-media-container">
          <div className="social-media-container">
            <img src={facebook} alt="" className="social-media-icons" />
            <img src={instagram} alt="" className="social-media-icons" />
            <img src={twitter} alt="" className="social-media-icons" />
          </div>
        </div>
        <div id="shop" className="footer-category">
          <p className="category-header">SHOP</p>
          <ul>
            <li>
              <a href="#" className="shop-links">
                Men
              </a>
            </li>
            <li>
              <a href="#" className="shop-links">
                Women
              </a>
            </li>
            <li>
              <a href="#" className="shop-links">
                Kids
              </a>
            </li>
          </ul>
        </div>
        <div id="explore" className="footer-category">
          <p className="category-header">EXPLORE</p>
          <ul>
            <li>
              <a href="#" className="shop-links">
                News
              </a>
            </li>
            <li>
              <a href="#" className="shop-links">
                Lookbook
              </a>
            </li>
          </ul>
        </div>
        <div id="support" className="footer-category">
          <p className="category-header">SUPPORT</p>
          <ul>
            <li>
              <a href="#" className="shop-links">
                Help Centre
              </a>
            </li>
            <li>
              <a href="#" className="shop-links">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="shop-links">
                Account
              </a>
            </li>
            <li>
              <a href="#" className="shop-links">
                Store
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
