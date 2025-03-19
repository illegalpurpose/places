import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';
import App from './App';
import ArticlePage from './pages/ArticlePage';
import AddArticlePage from './pages/AddArticlePage/AddArticlePage';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/fmdblog/" element={<App />} />
      <Route path={`/fmdblog/article/:id`} element={<ArticlePage />}/>
      <Route path="/fmdblog/add" element={<AddArticlePage />} />
    </Routes>
  </BrowserRouter>
);
