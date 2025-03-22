import React from 'react'
import './ArticlePage.css'
import Header from '../components/Header/Header'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const ArticlePage = () => {
  let {id} = useParams();
  const [articles, setArticles] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      const data = await axios.get("https://67dae93035c87309f52e9562.mockapi.io/api/v1/articles");
      setArticles(data.data);
      document.title = data.data[id - 1].title;
    };

    getData();
  }, [id]);

  return (
    <div className='ArticlePage'>
      <Header />
      {
        articles.length > 0 ?
        <>
          <span>{articles[id - 1].date}</span>
          <h1>{articles[id - 1].title}</h1>
          <p style={{whiteSpace: "pre-line"}}>
            {articles[id - 1].text}
          </p>
        </>
        : <></>
      }
    </div>
  )
}

export default ArticlePage
