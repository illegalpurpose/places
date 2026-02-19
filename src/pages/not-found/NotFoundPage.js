import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Helmet } from "react-helmet";

const NotFoundPage = () => {
    return (
        <div className="App">
            <Helmet>
                <title>404 | Страница не найдена</title>
            </Helmet>
            <Header />
            <h1>404 | Страница не найдена</h1>
            <Footer />
        </div>
    );
};

export default NotFoundPage;
