import React from 'react';
import styled from 'styled-components';
import { FaHeart, FaLanguage, FaPlane } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: var(--bg-dark);
  color: white;
  text-align: center;
  padding: 2rem 0;
`;

const FooterContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FooterLogo = styled.h3`
  color: white;
  font-size: 1.8rem;
  margin-bottom: 1rem;
  
  span {
    color: var(--primary-color);
  }
`;

const FooterText = styled.p`
  font-size: 0.95rem;
  color: #a1a1aa;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const FooterInfoSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const InfoBlock = styled.div`
  padding: 0 1.5rem;
  border-right: 1px solid #4361ee30;
  
  &:last-child {
    border-right: none;
  }
  
  @media (max-width: 768px) {
    border-right: none;
    border-bottom: 1px solid #4361ee30;
    padding-bottom: 1rem;
    
    &:last-child {
      border-bottom: none;
    }
  }
`;

const InfoTitle = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const InfoContent = styled.p`
  color: #a1a1aa;
  font-size: 0.9rem;
`;

const Copyright = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  
  svg {
    color: #ef4444;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <div className="container">
        <FooterContent>
          <FooterLogo>
            Ajay<span>Portfolio</span>
          </FooterLogo>
          
          <FooterText>
            Thank you for visiting my portfolio website. Feel free to explore my projects and get in touch
            if you have any questions or would like to collaborate on a project.
          </FooterText>
          
          <FooterInfoSection>
            <InfoBlock>
              <InfoTitle>
                <FaLanguage /> Languages
              </InfoTitle>
              <InfoContent>
                Telugu, English
              </InfoContent>
            </InfoBlock>
            
            <InfoBlock>
              <InfoTitle>
                <FaPlane /> Interests
              </InfoTitle>
              <InfoContent>
                Travelling
              </InfoContent>
            </InfoBlock>
          </FooterInfoSection>
          
          <Copyright>
            &copy; {currentYear} Padida Ajay. All Rights Reserved. Made with <FaHeart /> using React
          </Copyright>
        </FooterContent>
      </div>
    </FooterContainer>
  );
};

export default Footer; 