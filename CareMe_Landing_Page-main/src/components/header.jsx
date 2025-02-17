import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaGlobe } from 'react-icons/fa';
import Logo from '../assets/images/Syncturma.png';
import '../assets/styles/header.css';

const Header = ({ activeLink, setActiveLink }) => {
  return (
    <header>
      <Navbar
        expand="lg"
        sticky="top"
        style={{
          background: '#f0f0f0',
          boxShadow: '0px -1px 1px 0px #0000001A inset',
          position: 'relative',
          height: 'auto',
        }}
      >
        <Container>
          {/* Navbar content with logo and nav links close together */}
          <Navbar.Brand href="#" style={{ marginRight: '15%' }}>
          <img
            src={Logo}
            alt="SyncTurna Logo"
            style={{
            width: "100px",
            height: "auto",
            filter: "grayscale(20%) brightness(0%)",
  }}
/>

          </Navbar.Brand>

          {/* Navbar Toggle Button with "MENU" text */}
          <span className="menu-text">MENU</span> {/* Add MENU text */}
          <Navbar.Toggle 
            aria-controls="navbar-nav" 
            style={{ backgroundColor: 'black' }}  
            className="custom-toggler"
          />
          

          {/* Navbar Collapse Section */}
          <Navbar.Collapse id="navbar-nav">
            <Nav className="d-flex justify-content-start ">
              {["home", "about us", "our services", "testimonials", "faq"].map((link) => (
               <Nav.Link
               key={link}
               href={`#${link}`}
               className={`nav-link ${activeLink === link ? "active-link" : ""}`}
               onClick={() => setActiveLink(link)} // Set active link on click
               style={{
                 color: activeLink === link ? "#00b300" : "#212121", // Highlight the active link
                 fontWeight: activeLink === link ? 700 : 500,
               }}
             >
               {link.charAt(0).toUpperCase() + link.slice(1)}
             </Nav.Link>
             
              ))}
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
