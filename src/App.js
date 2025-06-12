import React from "react";
import { data } from "./articles";
import "./App.css";
import Article from "./components/Article";
// import axios from "axios";
import Header from "./components/Header/Header";
// import { Link } from "react-router-dom";

function App() {
	const [articles] = React.useState(data);
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
			<Header />
			<p>Все места Молдовы в одном месте.</p>
			{articles.map((article, indx) => {
				return (
					<Article
						key={indx}
						indx={indx}
						title={article.title}
						text={article.text}
						date={article.date}
					/>
				);
			})}
		</div>
	);
}

export default App;
