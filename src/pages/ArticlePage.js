import React from "react";
import "./ArticlePage.css";
import { data } from "../articles";
import Header from "../components/Header/Header";
import { useParams } from "react-router-dom";

const ArticlePage = () => {
    let { id } = useParams();
    const [articles] = React.useState(data || []);

    React.useEffect(() => {
        document.title = data[id - 1].title;
    }, [id]);

    return (
        <div className="ArticlePage">
            <Header />
            {articles.length > 0 ? (
                <>
                    <span>
                        {articles[id - 1].date +
                            " / " +
                            articles[id - 1].city +
                            " / " +
                            articles[id - 1].category}
                    </span>
                    <h1>{articles[id - 1].title}</h1>
                    <p style={{ whiteSpace: "pre-line" }}>
                        {articles[id - 1].text}
                    </p>
                    {articles[id - 1].content}
                </>
            ) : (
                <></>
            )}
        </div>
    );
};

export default ArticlePage;
