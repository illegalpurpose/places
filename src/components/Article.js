// import React from 'react'
import "./Article.css";
import { Link } from "react-router-dom";

const Article = ({ indx, title, text, date, city, category, language }) => {
	return (
		<div className="article">
			<div style={{ display: "flex", columnGap: "30px" }}>
				<p className="additional_text">{date}</p>
				<span className="additional_text">{city}</span>
				<span className="additional_text">{category}</span>
			</div>
			<Link to={`${language}/article/${indx + 1}`}>
				<h1>{title}</h1>
			</Link>
			<p>{text.substring(0, 400) + "..."}</p>
		</div>
	);
};

export default Article;
