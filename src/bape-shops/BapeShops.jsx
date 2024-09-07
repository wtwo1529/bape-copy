import img1 from "./img1.jpg";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";

import "./BapeShops.css";

export default function BapeShops() {
  return (
    <>
      <div className="bape-shops-container">
        <p className="header">SHOP BY BRAND</p>
        <div className="item-container">
          <a className="bape-shop">
            <img src={img1} alt="" className="bape-shop-img" />
          </a>
          <a href="" className="bape-shop">
            <img src={img2} alt="" className="bape-shop-img" />
          </a>
          <a href="" className="bape-shop">
            <img src={img3} alt="" className="bape-shop-img" />
          </a>
          <a href="" className="bape-shop">
            <img src={img4} alt="" className="bape-shop-img" />
          </a>
          <a href="" className="bape-shop">
            <img src={img5} alt="" className="bape-shop-img" />
          </a>
        </div>
      </div>
    </>
  );
}
