import React from 'react'
import './ArticlePage.css'
import Header from '../components/Header/Header'

const ArticlePage = ({date, title, text}) => {
  return (
    <div className='ArticlePage'>
      <Header />
      <span>{date}</span>
      <h1>{title}</h1>
      <p>
        {text}
      </p>
    </div>
  )
}

export default ArticlePage
