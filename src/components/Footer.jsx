import React from 'react';
import logo from '../assets/619.png'

const Footer = () => {
    return (
        <footer className="footer">
      <hr className="separator" />
      <div className="footer-text"><img src={logo} alt="Horo Logo" /></div>
      <div className="footer-text-foolish">Разработано учеником 9 класса Конновым Игнатом под руководством наставника Коннова К. Г.</div>
    </footer>
    );
}

export default Footer;
