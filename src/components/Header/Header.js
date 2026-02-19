import "./Header.css";
import { Link } from "react-router-dom";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

const Header = () => {
    return (
        <header>
            <Link to="/">
                <div>places.md</div>
            </Link>
            <ThemeSwitcher />
        </header>
    );
};

export default Header;
