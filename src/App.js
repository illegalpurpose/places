import './App.css';
import Article from './components/Article';
import Header from './components/Header/Header';
import articles from './articles/articles.json';
function App() {
  return (
    <div className="App">
      <Header />
      <h1>Всем привет хотелось сделать что то полезное и найти то что поможет мне и другим таким же как я.</h1>
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
