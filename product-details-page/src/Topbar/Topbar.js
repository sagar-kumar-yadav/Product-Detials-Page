import React from 'react'
import classes from './Topbar.module.css';

const Topbar = () => {
  return (
    <div>
        <header>
        <nav className={classes.Topbar}>
          <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='Amazon Logo'/>
        </nav>
        </header>
    </div>
  )
}

export default Topbar
