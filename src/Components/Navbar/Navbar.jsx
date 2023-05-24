import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [dark, setDark] = useState(false);

  const switchtheme = () => {
    if (dark) {
      document.documentElement.style.setProperty("--text-color", "black");
      document.documentElement.style.setProperty("--background-color", "white");
    }
    else {
      document.documentElement.style.setProperty("--text-color", "white");
      document.documentElement.style.setProperty("--background-color", "#242424");
    }
    setDark(!dark);
  };
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
        <div className="navbarInactive" onClick={switchtheme}>
          Theme Switch
        </div>
      </div>
    </div>
  );
};

export default Navbar;
