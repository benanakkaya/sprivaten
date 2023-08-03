import React from 'react'
import FooterBottom from './components/FooterBottom'
import FooterTop from './components/FooterTop'


const Footer = () => {



  return (
    <footer className='footer'>
        <div className="footer-row container">
            <FooterTop />
            <FooterBottom />
        </div>
    </footer>
  )
}

export default Footer
