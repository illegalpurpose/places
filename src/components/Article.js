// import React from 'react'
import "./Article.css";
import { Link } from "react-router-dom";

const Article = ({ indx, title, text, date }) => {
	return (
		<div className="article">
			<p style={{ color: "grey", fontWeight: 500, fontSize: 16 }}>
				{date}
			</p>
			<Link to={`/article/${indx + 1}`}>
				<h1>{title}</h1>
			</Link>
			<p>{text.substring(0, 400) + "..."}</p>
		</div>
	);
};

export default Article;
