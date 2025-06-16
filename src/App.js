import React from "react";
import { data } from "./articles";
import "./App.css";
import Article from "./components/Article";
// import axios from "axios";
import Header from "./components/Header/Header";
// import { Link } from "react-router-dom";

function App() {
	const [articles] = React.useState(data);
	const [input, setInput] = React.useState("");
	const [language, setLanguage] = React.useState(
		localStorage.getItem("language") || "ru"
	);
	React.useEffect(() => {
		// const getData = async () => {
		//   const data = await axios.get("https://67dae93035c87309f52e9562.mockapi.io/api/v1/articles");
		//   setArticles(data.data);
		// };

		// getData();
		document.title = "places.md";
	}, []);
	return (
		<div className="App">
			<Header language={language} setLanguage={setLanguage} />
			{language === "ru" ? (
				<p>Все места Молдовы в одном месте.</p>
			) : (
				<p>Toate locurile din Moldova într-un singur loc.</p>
			)}
			<input
				name="search"
				className="search"
				type="text"
				placeholder={language === "ru" ? "Поиск:" : "Căutare:"}
				value={input}
				onChange={(event) => {
					setInput(event.target.value);
				}}
			/>
			<h2 style={{ fontSize: "20px" }}>
				{input.length > 0
					? input + ":"
					: language === "ru"
					? "Статьи"
					: "Articole"}
			</h2>
			{articles
				.filter((article) =>
					article.title[language]
						.toLowerCase()
						.includes(input.toLowerCase())
				)
				.map((article, indx) => {
					return (
						<Article
							key={indx}
							indx={indx}
							title={article.title[language]}
							text={article.text[language]}
							date={article.date}
							city={article.city[language]}
							category={article.category[language]}
							language={language}
						/>
					);
				})}
		</div>
	);
}

export default App;
