import galleryImg from "./gallery-img.jpg";

import "./Gallery.css";

export default function Gallery() {
  return (
    <>
      <div className="gallery-container">
        <a className="img-btn">
          <img src={galleryImg} className="gallery-img"></img>
          <h1 className="img-text">SHOP NOW</h1>
        </a>
      </div>
    </>
  );
}
