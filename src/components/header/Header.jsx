import React from 'react'
import './header.css'
import CTA from './CTA'
import ME2 from '../../assets/meImg.png'
import HeaderSocials from './HeaderSocials'


function Header() {
  return (
    <header>
        <div className='container header__container'>
            <h5>Hello I'm</h5>
            <h1>Willian Rosa</h1>
            <h5 className='text-light'>Fullstack Developer</h5>
            <CTA />
            <HeaderSocials />
            <div className='me'>
                <img src={ME2} alt='Me'/>
            </div>
            <a href='#contact' className='scroll__down'>Scroll down</a>
        </div>
    </header>
  )
}

export default Header