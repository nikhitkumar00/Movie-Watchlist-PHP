import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SearchIcon from "@mui/icons-material/Search";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Navbar = () => {
	const [dark, setDark] = useState(false);

	const switchtheme = () => {
		if (dark) {
			document.documentElement.style.setProperty("--text-color", "black");
			document.documentElement.style.setProperty(
				"--background-color",
				"white"
			);
		} else {
			document.documentElement.style.setProperty("--text-color", "white");
			document.documentElement.style.setProperty(
				"--background-color",
				"#242424"
			);
		}
		setDark(!dark);
	};
	return (
		<div className="navbarWrapper">
			<div className="navbarHeader">NIKHIT KUMAR</div>
			<div className="navbarLinks">
				<NavLink
					to={"/"}
					className={({ isActive }) =>
						isActive ? "navbarActive" : "navbarInactive"
					}
				>
					<SearchIcon />
					Search
				</NavLink>
				<NavLink
					to={"/favourites"}
					className={({ isActive }) =>
						isActive ? "navbarActive" : "navbarInactive"
					}
				>
					<FavoriteIcon />
					Favourites
				</NavLink>
				<NavLink
					to={"/wanttowatch"}
					className={({ isActive }) =>
						isActive ? "navbarActive" : "navbarInactive"
					}
				>
					<PlaylistAddIcon />
					Want to Watch
				</NavLink>
				<NavLink
					to={"/watched"}
					className={({ isActive }) =>
						isActive ? "navbarActive" : "navbarInactive"
					}
				>
					<CheckCircleIcon />
					Watched
				</NavLink>
				<div className="navbarInactive" onClick={switchtheme}>
					<DarkModeIcon />
					Theme Switch
				</div>
			</div>
		</div>
	);
};

export default Navbar;
