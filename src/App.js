import React from "react";
import { data } from "./articles.js";
import "./App.css";
import Article from "./components/Article";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer.js";
import { Helmet } from "react-helmet";

function App() {
    const [articles] = React.useState(data);
    const [input, setInput] = React.useState("");

    return (
        <div className="App">
            <Helmet>
                <title>places.md</title>
                <meta name="description" content="Рассуждения на разные темы" />
            </Helmet>
            <Header />
            <p>Рассуждения на разные темы</p>
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
            {articles
                .filter((article) =>
                    article.title.toLowerCase().includes(input.toLowerCase()),
                )
                .reverse()
                .map((article, indx) => {
                    return (
                        <Article
                            key={indx}
                            id={article.id}
                            title={article.title}
                            text={article.text}
                            date={article.date}
                            city={article.city}
                            category={article.category}
                        />
                    );
                })}
            <Footer />
        </div>
    );
}

export default App;
