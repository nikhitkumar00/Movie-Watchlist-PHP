import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbarWrapper">
      <div className="navbarHeader">NIKHIT KUMAR</div>
      <div className="navbarLinks">
        <NavLink
          to={"/search"}
          className={({ isActive }) =>
            isActive ? "navbarActive" : "navbarInactive"
          }
        >
          Search
        </NavLink>
        <NavLink
          to={"/favourites"}
          className={({ isActive }) =>
            isActive ? "navbarActive" : "navbarInactive"
          }
        >
          Favourites
        </NavLink>
        <NavLink
          to={"/wanttowatch"}
          className={({ isActive }) =>
            isActive ? "navbarActive" : "navbarInactive"
          }
        >
          Want to Watch
        </NavLink>
        <NavLink
          to={"/watched"}
          className={({ isActive }) =>
            isActive ? "navbarActive" : "navbarInactive"
          }
        >
          Watched
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
