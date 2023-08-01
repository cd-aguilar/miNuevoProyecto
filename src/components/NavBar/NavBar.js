import React from 'react';

function NavBar() {
  return (
    <>
    
    <header>
          <img src="src/components/img/top-logo@2x.png" className="brand" />
          <div className="menu-btn" />
          <div className="navigation">
            <div className="navigation-items">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Products</a>
              <a href="#">Services</a>
              <a href="#" onClick={() => window.location.href = "contacto1"}>Contact</a>
              <hr/>
            </div>
          </div>
        </header>
    
    </>
  )
}

export default NavBar;