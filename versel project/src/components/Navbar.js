import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavbarContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--bg-color);
  box-shadow: var(--shadow);
  padding: ${props => props.scrolled ? '15px 0' : '20px 0'};
  z-index: 1000;
  transition: var(--transition);
  background-color: ${props => props.scrolled ? 'rgba(255, 255, 255, 0.95)' : 'var(--bg-color)'};
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0;
`;

const NavMenu = styled.nav`
  display: flex;
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-100%'};
    width: 250px;
    height: 100vh;
    background-color: white;
    flex-direction: column;
    padding-top: 80px;
    transition: right 0.3s ease;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavItem = styled.li`
  margin-left: 30px;
  
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const NavLink = styled(Link)`
  color: var(--text-color);
  font-weight: 500;
  padding: 5px 0;
  position: relative;
  cursor: pointer;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: var(--transition);
  }
  
  &:hover:after, &.active:after {
    width: 100%;
  }
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  z-index: 1001;
  
  @media (max-width: 768px) {
    display: block;
  }
  
  span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: var(--text-color);
    margin: 5px 0;
    transition: var(--transition);
    
    &:nth-child(1) {
      transform: ${props => props.isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'};
    }
    
    &:nth-child(2) {
      opacity: ${props => props.isOpen ? '0' : '1'};
    }
    
    &:nth-child(3) {
      transform: ${props => props.isOpen ? 'rotate(-45deg) translate(7px, -8px)' : 'none'};
    }
  }
`;

const Navbar = ({ scrolled }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  
  return (
    <NavbarContainer scrolled={scrolled}>
      <div className="container">
        <NavContent>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Logo>My Portfolio</Logo>
          </motion.div>
          
          <NavMenu isOpen={isMenuOpen}>
            <NavList>
              <NavItem>
                <NavLink
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="skills"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={closeMenu}
                >
                  Skills
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={closeMenu}
                >
                  Projects
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </NavItem>
            </NavList>
          </NavMenu>
          
          <Hamburger 
            isOpen={isMenuOpen} 
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </Hamburger>
        </NavContent>
      </div>
    </NavbarContainer>
  );
};

export default Navbar; 