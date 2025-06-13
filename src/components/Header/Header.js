import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Header = ({ language, setLanguage }) => {
	const changeLanguage = () => {
		if (language === "ru") {
			setLanguage("ro");
			localStorage.setItem("language", "ro");
		} else {
			setLanguage("ru");
			localStorage.setItem("language", "ru");
		}
	};
	return (
		<header>
			<Link to="/">
				<div>places.md</div>
			</Link>
			<p
				onClick={() => {
					changeLanguage();
				}}
				style={{
					fontSize: "18px",
					marginRight: "30px",
					marginLeft: "auto",
					cursor: "pointer",
					fontWeight: 700,
					marginBottom: "2.5px",
				}}
			>
				{language === "ru" ? "ro" : "ru"}
			</p>
			<ThemeSwitcher />
		</header>
	);
};

export default Header;
