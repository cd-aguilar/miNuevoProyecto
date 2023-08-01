import React from 'react'
import topLogo from '../img/top-logo.png'

function Footer() {
  return (
    <>
    <footer className="pie">
          <div className="foot_">
            <h1 className="pal_footer">2023 © All rights reserved.</h1>
            <img src={topLogo} className="log_foot" />
          </div>
        </footer>
    
    </>
  )
}

export default Footer