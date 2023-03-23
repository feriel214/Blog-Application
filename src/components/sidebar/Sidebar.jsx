import "./sidebar.css";
import naruto2 from "../../assets/naruto2.jpg";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src={naruto2} alt="" />
        <p>lorem20</p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Muisc</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">FOLlOW US</span>
        <div className="sidebarSocialContainer">
          <i className="sidebarIcon fa-brands fa-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-github"></i>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
