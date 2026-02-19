import React, { useState } from "react";
import "./ArticlePage.css";
import { data } from "../../articles";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";

const ArticlePage = () => {
    let { id } = useParams();
    const [article, setArticle] = useState({});

    React.useEffect(() => {
        setArticle(data.find((el) => el.id === Number(id)));
    }, [id]);

    return (
        <div className="ArticlePage">
            <Helmet>
                <title>{article.title}</title>
                <meta name="description" content={article.text} />
            </Helmet>
            <Header />
            {article ? (
                <>
                    <span>
                        {article.date +
                            " / " +
                            article.city +
                            " / " +
                            article.category}
                    </span>
                    <h1>{article.title}</h1>
                    <p style={{ whiteSpace: "pre-line" }}>{article.text}</p>
                    {article.content}
                </>
            ) : (
                <></>
            )}
            <Footer />
        </div>
    );
};

export default ArticlePage;
