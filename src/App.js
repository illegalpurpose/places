import React from 'react';
import './App.css';
import Article from './components/Article';
import axios from 'axios';
import Header from './components/Header/Header'
import { Link } from 'react-router';

function App() {
  const [articles, setArticles] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      const data = await axios.get("https://67dae93035c87309f52e9562.mockapi.io/api/v1/articles");
      setArticles(data.data);
    };

    getData();
  }, []);
  return (
    <div className="App">
      <Header />
      <h1>Всем привет хотелось <Link to={'/fmdblog/add'} style={{fontSize: '20px', textDecoration: 'none'}}>сделать</Link> что то полезное и найти то что поможет мне и другим таким же как я.</h1>
      {
        articles.map((article, indx) => {
          return(
            <Article key={indx} indx={indx} title={article.title} text={article.text}/>
          )
        })
      }
    </div>
  );
}

export default App;
