import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <Link to={"/privacy-policy"}>
                Политика конфиденциальности и Условия использования
            </Link>
            <p>Все права защищены © {year} Copyright places.md</p>
        </footer>
    );
};

export default Footer;
