import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import ArticlePage from "./pages/article/ArticlePage";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";
import NotFoundPage from "./pages/not-found/NotFoundPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path={`/article/:id`} element={<ArticlePage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>,
);
