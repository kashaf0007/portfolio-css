import React from 'react'
import Link from 'next/link';
import{IoLogoGithub} from 'react-icons/io'
import{BsDiscord} from 'react-icons/bs'
import { FaLinkedin } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className='footer'>
      <footer className='footer-section'>
        <div className=' footer-div'>
          <a className='footer-a'>
          <img   className='footer-img' src="img2.jpeg" alt="profile pic" />
          <span className="footer-heading">PORTFOLIO</span>
          </a>
            <p className='footer-para'>© 2024 Portfolio</p> 
            <span className=" footer-span">
        <Link target="_blank" href="https://github.com/kashaf0007" className="footer-icons">
        <IoLogoGithub/>
        </Link>

        <Link target="_blank" href="https://www.linkedin.com/in/kashafaman-aman-398082316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="footer-icons2">
        <FaLinkedin/>
        </Link>
        
        <Link target="_blank" href="" className="footer-icons3">
        <BsDiscord/>
        </Link>
 
    </span>





        </div>

      </footer>
      
    </div>
  )
}

export default Footer
