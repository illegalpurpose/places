import React from 'react'
import './ThemeSwitcher.css'
const ThemeSwitcher = () => {
    const [currentTheme, setCurrentTheme] = React.useState(localStorage.getItem('theme') || 'light');
    React.useEffect(() => {
        setCurrentTheme(localStorage.getItem('theme') || 'light');
        document.documentElement.setAttribute("data-theme", localStorage.getItem('theme') || 'light');
    }, []);

    const change = () => {
        if(currentTheme === 'light'){
            document.documentElement.setAttribute("data-theme", "dark");
            setCurrentTheme('dark');
            localStorage.setItem("theme", 'dark');
        } else {
            document.documentElement.setAttribute("data-theme", "light");
            setCurrentTheme('light');
            localStorage.setItem("theme", 'light');
        }
    }
  return (
    <div className='ThemeSwitcher' style={currentTheme === 'light' ? {backgroundColor: '#1E1E1E'} : {backgroundColor: '#F5F5F5'}} onClick={() => {change()}}>
    </div>
  )
}

export default ThemeSwitcher
