import "./Header.css";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Header = () => {
    return (
        <header>
            <Link to="/">
                <img src="./logo512.png" alt="logo" className="logo_img" />
            </Link>
            <Link to="/">
                <h1>places.md</h1>
            </Link>

            <ThemeSwitcher />
        </header>
    );
};

export default Header;
