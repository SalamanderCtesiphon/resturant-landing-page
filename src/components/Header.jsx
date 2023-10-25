import React from 'react'

function Header(props) {
  return (
    <header>
      <a href="/">
        <button>Home</button>
      </a>
      <a href="menu">
        <button>Menu</button>
      </a>
      <a href="about">
        <button>About</button>
      </a>
    </header>
  )
}

export default Header
