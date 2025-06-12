// import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Header = () => {
	return (
		<header>
			<Link to="/">
				<div>places.md</div>
			</Link>
			{/* <p>ru / en</p> */}
			<ThemeSwitcher />
		</header>
	);
};

export default Header;
