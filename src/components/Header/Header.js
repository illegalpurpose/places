import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'

const Header = () => {
  return (
    <header>
        <Link to='/fmdblog'><div>FMD BLOG</div></Link>
        {/* <p>ru / en</p> */}
        <ThemeSwitcher />
    </header>
  )
}

export default Header
