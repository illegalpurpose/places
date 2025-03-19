import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';
import App from './App';
import ArticlePage from './pages/ArticlePage';
import articles from './articles/articles.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      {
        articles.map((article, indx) => {
          return(
            <Route path={`/article/${indx + 1}`} key={indx} element={<ArticlePage date={article.date} title={article.title} text={article.text}/>}/>
          )
        })
      }
    </Routes>
  </BrowserRouter>
);
