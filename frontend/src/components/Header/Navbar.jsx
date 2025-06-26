import React, { useEffect, useState } from 'react'
import NavButton from '../Buttons/NavButton'
import IconButton from '../Buttons/IconButton'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > window.innerHeight - 65) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleUserMenuOpen = () => {
    setIsUserMenuOpen(prev => !prev);
    setIsMenuOpen(false)
  }

  return (
    <nav className={`full-w center justify-content-between px-3${isUserMenuOpen ? " user-menu-open" : ""}${isMenuOpen ? " menu-open" : ""}`} style={{background: scrolled ? "rgba(255, 255, 255, 0.7)" : "transparent", color: scrolled ? "black" : "whitesmoke"}}>
      <div className="logo-ctnr full-h center justify-content-start">
        <img src="/assets/icons/logos/logo.png" alt="logo" /><span>The Grih</span>
      </div>
      <div className="nav-items-ctnr">
          <div className="full-w center justify-content-end menu-nav-btn pe-4" style={{transform: "translateY(-50px)"}}>
            <IconButton label={"cross"} additionalClasses={"menu-nav-btn inverted-color"} onClickEvent={() => setIsMenuOpen(false)}/>
          </div>
          <NavButton target={"/"} label={"Home"}/>
          <NavButton target={"/about"} label={"Services"}/>
          <NavButton target={"/shop"} label={"Why Choose Us"}/>
          <NavButton target={"/contact"} label={"Contact"}/>
      </div>
      <div className="user-items-ctnr">
          <IconButton label="user"  additionalClasses={`mn-btn ${scrolled ? "": "invert-1"}`} onClickEvent={() => console.log("user Clicked!")}/>
          <IconButton label="search"  additionalClasses={`mn-btn ${scrolled ? "": "invert-1"}`} onClickEvent={() => console.log("search Clicked!")}/>
          <IconButton label="fav"  additionalClasses={`mn-btn ${scrolled ? "": "invert-1"}`} onClickEvent={() => console.log("fav Clicked!")}/>
          <IconButton label="call"  additionalClasses={`mn-btn ${scrolled ? "": "invert-1"}`} onClickEvent={() => console.log("call Clicked!")}/>
      </div>
      <div className="mob-btn-ctnr center">
          <IconButton label={"menu"} additionalClasses={`menu-nav-btn ${scrolled ? "": "invert-1"}`} onClickEvent={() => setIsMenuOpen(true)}/>
          <IconButton label={isUserMenuOpen ? "cross" : "user"} additionalClasses={`user-nav-btn ${scrolled ? "": "invert-1"}`} onClickEvent={toggleUserMenuOpen}/>
      </div>
    </nav>
  )
}

export default Navbar
