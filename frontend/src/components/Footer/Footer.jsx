import React from 'react'

function Footer() {
  return (
    <footer className='full-w footer column'>
      <div className="footer-top d-flex flex-wrap">
        <div className='footer-top-div column footer-top-div1'>
            <div className='logo-ctnr center justify-content-start'>
              <img src="/assets/icons/logos/logo.png" alt="logo" />
              <span>The Grih</span>
            </div>
            <p>ISI-6, RIICO Institutional Area, Sitapura, Jaipur, Rajasthan 302022</p>
        </div>
        <div className='footer-top-div column footer-top-div2'>
            <h6>Links</h6>
            <div className='column'>
                <a href="#">Home</a>
                <a href="#">Services</a>
                <a href="#">Why Choose Us</a>
                <a href="#">Contact</a>
            </div>
        </div>
        <div className='footer-top-div column footer-top-div3'>
            <h6>Help</h6>
            <div className='column'>
                <a href="#">Payment Options</a>
                <a href="#">Property Listings</a>
                <a href="#">Privacy Policies</a>
            </div>
        </div>
        <div className='footer-top-div column footer-top-div4'>
            <h6>Newsletter</h6>
            <div className='column'>
                <form>
                    <input type="text" placeholder='Enter your email'/>
                    <button type='submit'>Subscribe</button>
                </form>
            </div>
        </div>
      </div>
      <div className="footer-bottom">
        &#169; The Grih. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer