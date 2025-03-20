import React from 'react'
import './AddArticlePage.css'
import Header from '../../components/Header/Header'
import axios from 'axios';

const AddArticlePage = () => {
  const [title, setTitle] = React.useState('');
  const [text, setText] = React.useState('');

  const addArticle = async () => {
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      };
      
    const date = new Date();
    const formattedDate = date.toLocaleString('ru-RU', options).replace(',', '');

    await axios.post('https://67dae93035c87309f52e9562.mockapi.io/api/v1/articles', {
        "date": formattedDate,
        "title": title,
        "text":  text
    });

    document.location.href='https://illegalpurpose.github.io/fmdblog'
  }
  return (
    <div className='AddArticlePage'>
      <Header />
      <input type='text' placeholder='Title' value={title} onChange={(event) => {setTitle(event.target.value)}}/>
      <textarea placeholder='Text' value={text} onChange={(event) => {setText(event.target.value)}}/>
      <button onClick={() => {addArticle()}}>Создать статью</button>
    </div>
  )
}

export default AddArticlePage
