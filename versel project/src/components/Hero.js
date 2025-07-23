import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, rgba(67, 97, 238, 0.05) 0%, rgba(58, 12, 163, 0.05) 100%);
  padding-top: 80px;
  position: relative;
  overflow: hidden;
`;

const HeroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(76, 201, 240, 0.1) 0%, rgba(255, 255, 255, 0) 70%);
    border-radius: 50%;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -30%;
    width: 80%;
    height: 80%;
    background: radial-gradient(circle, rgba(67, 97, 238, 0.1) 0%, rgba(255, 255, 255, 0) 70%);
    border-radius: 50%;
  }
`;

const HeroContent = styled.div`
  max-width: 1000px;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroInfo = styled.div`
  z-index: 1;
`;

const HeroImageContainer = styled(motion.div)`
  position: relative;
  z-index: 1;
  
  @media (max-width: 992px) {
    grid-row: 1;
    margin-bottom: 2rem;
  }
`;

const HeroImage = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  background: var(--gradient-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  box-shadow: 0 10px 30px rgba(67, 97, 238, 0.3);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: 'P';
    position: absolute;
    font-size: 200px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.1);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 992px) {
    font-size: 2.8rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 576px) {
    font-size: 2.2rem;
  }
`;

const Highlight = styled.span`
  color: var(--primary-color);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
    height: 5px;
    background: var(--gradient-bg);
    opacity: 0.3;
    z-index: -1;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--secondary-color);
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
  
  @media (max-width: 992px) {
    margin: 0 auto 2rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const CTALink = styled(Link)`
  cursor: pointer;
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--bg-light);
  border-radius: 50%;
  color: var(--primary-color);
  transition: var(--transition);
  box-shadow: var(--shadow);
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(67, 97, 238, 0.3);
  }
`;

const ContactInfo = styled(motion.div)`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: 992px) {
    justify-content: center;
    flex-wrap: wrap;
  }
  
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  svg {
    color: var(--primary-color);
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroBackground />
      <div className="container">
        <HeroContent>
          <HeroInfo>
            <HeroTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hello, I'm <Highlight>Padida Ajay</Highlight>
            </HeroTitle>
            
            <Subtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Computer Science Student
            </Subtitle>
            
            <Description
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I'm searching for a challenging position where I can learn new skills, expand my knowledge base, and advance the business. I aim to use my skills to promote innovation and aid in the general growth of the firm.
            </Description>
            
            <CTAButtons
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <CTALink
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="btn primary"
              >
                View My Work
              </CTALink>
              
              <CTALink
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="btn secondary"
              >
                Contact Me
              </CTALink>
            </CTAButtons>
            
            <ContactInfo
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <a href="mailto:ajaypadida7@gmail.com">
                <FaEnvelope /> ajaypadida7@gmail.com
              </a>
              <a href="tel:+918919832684">
                <FaPhone /> 8919832684
              </a>
            </ContactInfo>
            
            <SocialLinks
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <SocialLink href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </SocialLink>
              <SocialLink href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialLink>
            </SocialLinks>
          </HeroInfo>
          
          <HeroImageContainer
            className="float-animation"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <HeroImage>
              {/* Replace with your actual image if available */}
              {/* <img src="/path/to/your/profile.jpg" alt="Padida Ajay" /> */}
            </HeroImage>
          </HeroImageContainer>
        </HeroContent>
      </div>
    </HeroSection>
  );
};

export default Hero; 