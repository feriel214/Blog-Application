import React from "react";
import "./TopBar.css";
import me from "../../assets/me.png";
function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i class="topIcon fa-brands fa-github"></i>
      </div>
      <div className="topCenter">
        <div className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </div>
      </div>
      <div className="topRight">
        <img className="topImage" src={me} alt="" />
        <i className="topSearch fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default TopBar;
