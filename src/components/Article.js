import React from 'react'
import './Article.css'
import { Link } from 'react-router'

const Article = ({indx, title, text}) => {
  return (
    <div className='article'>
        <Link to={`/fmdblog/article/${indx + 1}`}><h2>{title}</h2></Link>
        <p>{text.substring(0, 400) + "..."}</p>
    </div>
  )
}

export default Article
