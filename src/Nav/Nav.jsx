import { useState } from "react";

import "./Nav.css";

export default function Nav() {
  return (
    <>
      <nav className="nav-bar">
        <div className="left-side">
          <button type="button" className="nav-btn">
            MEN
          </button>
          <button type="button" className="nav-btn">
            WOMEN
          </button>
          <button type="button" className="nav-btn">
            KIDS
          </button>
          <button type="button" className="nav-btn">
            GALLERY
          </button>
          <button type="button" className="nav-btn">
            NEWs
          </button>
          <button type="button" className="nav-btn">
            LOOKBOOK
          </button>
        </div>
        <img src="" alt="" className="logo" />
        <div className="right-side">
          <button type="button" className="nav-btn">
            STORES
          </button>
          <button type="button" className="nav-btn">
            SEARCH
          </button>
          <button type="button" className="nav-btn">
            WISHLIST
          </button>
          <button type="button" className="nav-btn">
            ACCOUNT
          </button>
          <button type="button" className="nav-btn">
            BAG
          </button>
        </div>
      </nav>
    </>
  );
}
