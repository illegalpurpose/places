import React from "react";
import { data } from "./articles.js";
import "./App.css";
import Article from "./components/Article";
import Header from "./components/Header/Header";

function App() {
    const [articles] = React.useState(data);
    const [input, setInput] = React.useState("");

    React.useEffect(() => {
        document.title = "places.md";
    }, []);

    return (
        <div className="App">
            <Header />
            <p>Все о Молдовe на одном сайте.</p>
            <input
                name="search"
                className="search"
                type="text"
                placeholder={"Поиск:"}
                value={input}
                onChange={(event) => {
                    setInput(event.target.value);
                }}
            />
            <h2 style={{ fontSize: "20px" }}>
                {input.length > 0 ? input + ":" : "Статьи"}
            </h2>
            {articles
                .filter((article) =>
                    article.title.toLowerCase().includes(input.toLowerCase()),
                )
                .map((article, indx) => {
                    return (
                        <Article
                            key={indx}
                            indx={indx}
                            title={article.title}
                            text={article.text}
                            date={article.date}
                            city={article.city}
                            category={article.category}
                        />
                    );
                })}
        </div>
    );
}

export default App;
