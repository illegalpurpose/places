import "./Article.css";
import { Link } from "react-router-dom";

const Article = ({ id, title, text, date, city, category }) => {
    return (
        <article className="article">
            <div style={{ display: "flex", columnGap: "10px" }}>
                <p className="additional_text">{date}</p>
                <p className="additional_text">/</p>
                <span className="additional_text">{city}</span>
                <p className="additional_text">/</p>
                <span className="additional_text">{category}</span>
            </div>
            <Link to={`/article/${id}`}>
                <h2>{title}</h2>
            </Link>
            <p>{text.substring(0, 400) + "..."}</p>
        </article>
    );
};

export default Article;
