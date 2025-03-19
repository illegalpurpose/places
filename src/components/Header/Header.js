import React from 'react'
import './Header.css'
import { Link } from 'react-router'

const Header = () => {
  return (
    <header>
        <Link to='/'><div>FMD BLOG</div></Link>
        {/* <p>ru / en</p> */}
    </header>
  )
}

export default Header
