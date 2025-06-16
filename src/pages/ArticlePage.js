import React from "react";
import "./ArticlePage.css";
import { data } from "../articles";
import Header from "../components/Header/Header";
// import axios from 'axios'
import { useParams } from "react-router-dom";

const ArticlePage = () => {
	let { id, pageLanguage } = useParams();
	const [articles] = React.useState(data || []);
	const [language, setLanguage] = React.useState(
		pageLanguage || localStorage.getItem("language")
	);
	React.useEffect(() => {
		// const getData = async () => {
		//   const data = await axios.get("https://67dae93035c87309f52e9562.mockapi.io/api/v1/articles");
		//   setArticles(data.data);
		//   document.title = data.data[id - 1].title;
		// };
		// getData();
		document.title = data[id - 1].title[language];
	}, [id, language]);

	return (
		<div className="ArticlePage">
			<Header language={language} setLanguage={setLanguage} />
			{articles.length > 0 ? (
				<>
					<span>
						{articles[id - 1].date +
							" / " +
							articles[id - 1].city[language] +
							" / " +
							articles[id - 1].category[language]}
					</span>
					<h1>{articles[id - 1].title[language]}</h1>
					<p style={{ whiteSpace: "pre-line" }}>
						{articles[id - 1].text[language]}
					</p>
					{articles[id - 1].content[language]}
				</>
			) : (
				<></>
			)}
		</div>
	);
};

export default ArticlePage;
