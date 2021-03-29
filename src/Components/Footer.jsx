import React from 'react'

const Footer = () => {
    return (
        <footer className="page-footer purple">
        <div className="footer-copyright">
          <div className="container">
          © {new Date().getFullYear()} Copyrighted | Made With &hearts;
          </div>
        </div>
      </footer>
          
    );
}
 
export default Footer;