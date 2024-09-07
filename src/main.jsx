import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Nav from "./Nav/Nav.jsx";
import Footer from "./Footer/Footer.jsx";
import Gallery from "./Gallery/Gallery.jsx";
import Slider from "./slider/Slider.jsx";
import Shops from "./Shops/Shops.jsx";
import BapeShops from "./bape-shops/BapeShops.jsx";
import "./index.css";
import "./style.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Nav />
    <Gallery />
    <Slider />
    <Shops />
    <BapeShops />
    <Footer />
  </StrictMode>
);
