import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import logo from "../assets/mitlogo.png"
export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="nav-content">
        {/* Logo */}
         <motion.div whileHover={{ scale: 1.02 }} className="nav-logo shrink-0">
    <img
      src={logo}
      alt="Shah Masood logo"
      style={{width:"auto", height:"60px"}}
    />
      {/* <div style={{
        display:"flex",
        alignItems:"center",
        gap:"5px",
      }}>
        <p style={{fontSize:"40px", margin:"0px", fontWeight:"bold"}}>{"</>"}</p>
        <p style={{fontSize:"27px", margin:"0px", fontWeight:"semi-bold"}}>Shah Masood</p>

      </div> */}
  </motion.div>

        {/* Desktop Navigation */}
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.href}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
         <IoMdMenu/>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className='mobile-menu-header'>
           <img
      src={logo}
      alt="Shah Masood logo"
      style={{width:"auto", height:"60px"}}
    />
           <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
         <IoClose/>
        </button>

        </div>
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.name}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}
