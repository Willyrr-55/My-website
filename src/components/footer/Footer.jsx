import React from 'react'
import './footer.css'
import {FaFacebook, FaTwitter, FaInstagram, FaLinkedin} from 'react-icons/fa'

function Footer() {
  return (
    <footer>
       <a href="#" className='footer__logo'>WillyRosa</a>

       <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact ">Contact</a></li>
       </ul>
       <div className='footer__socials'>
        {/* <a href="https://facebook.com" target="_blank"><FaFacebook /></a> */}
        <a href="https://www.instagram.com/willyrosaaa/" target="_blank"><FaInstagram /></a>
        {/* <a href="https://twitter.com" target="_blank"><FaTwitter /></a> */}
        <a href="https://linkedin.com/in/willian-adonay-rosa-ramirez-487bb1218/" target="_blank"><FaLinkedin /></a>
       </div>
       <div className='footer__copyright'>
          <small>&copy; WillyRosa All rights reserved.</small>
       </div>
    </footer>
  )
}

export default Footer