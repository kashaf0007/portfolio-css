import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="header">
    <div className="header-div">
      <a className=" header-a">
        <img  className='header-img' src="img2.jpeg" alt="profile pic" />
        <span className="img-span">Portfolio</span>
      </a>
      <nav className=" header-nav">
        <Link href={"/"} className="header-link">Home</Link>
        <Link  href={"#about"} className="header-link">About</Link>
        <Link  href={"#Contact"} className="header-link">Contact</Link>
        <Link href={"#projects"} className="header-link">Projects</Link> 
        <Link href={"#skills"} className="header-link">Skills</Link>
      </nav>
    </div>
  </header>
  )
}

export default Header
