import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactSection = styled.section`
  background-color: var(--bg-light);
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const IconContainer = styled.div`
  font-size: 1.5rem;
  color: var(--primary-color);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-color);
  border-radius: 50%;
  box-shadow: var(--shadow);
`;

const ContactItemText = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 0.3rem;
  }
  
  p {
    color: var(--secondary-color);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--bg-color);
  border-radius: 50%;
  color: var(--primary-color);
  transition: var(--transition);
  box-shadow: var(--shadow);
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
    transform: translateY(-3px);
  }
`;

const ContactFormContainer = styled(motion.div)`
  background-color: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  font-family: inherit;
  font-size: 1rem;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  font-family: inherit;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.1);
  }
`;

const Alert = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: var(--border-radius);
  font-weight: 500;
  
  &.success {
    background-color: rgba(16, 185, 129, 0.1);
    color: #065f46;
    border: 1px solid rgba(16, 185, 129, 0.2);
  }
  
  &.error {
    background-color: rgba(239, 68, 68, 0.1);
    color: #b91c1c;
    border: 1px solid rgba(239, 68, 68, 0.2);
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [alertInfo, setAlertInfo] = useState({
    show: false,
    message: '',
    type: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setAlertInfo({
        show: true,
        message: 'Please fill in all required fields',
        type: 'error',
      });
      return;
    }
    
    // Here you would normally send data to a server
    // For demo purposes, we're just showing a success message
    setAlertInfo({
      show: true,
      message: 'Your message has been sent successfully!',
      type: 'success',
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    
    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({
        show: false,
        message: '',
        type: '',
      });
    }, 5000);
  };
  
  const contactItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };
  
  return (
    <ContactSection id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <ContactContent>
          <ContactInfo>
            <p>Feel free to reach out to me for any inquiries or opportunities. I'm currently available for internships, collaborative projects, or discussions about data analysis and development.</p>
            
            <ContactItem
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <IconContainer>
                <FaEnvelope />
              </IconContainer>
              <ContactItemText>
                <h3>Email</h3>
                <p>ajaypadida7@gmail.com</p>
              </ContactItemText>
            </ContactItem>
            
            <ContactItem
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <IconContainer>
                <FaPhone />
              </IconContainer>
              <ContactItemText>
                <h3>Phone</h3>
                <p>8919832684</p>
              </ContactItemText>
            </ContactItem>
            
            <ContactItem
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <IconContainer>
                <FaMapMarkerAlt />
              </IconContainer>
              <ContactItemText>
                <h3>Location</h3>
                <p>India</p>
              </ContactItemText>
            </ContactItem>
            
            <SocialLinks>
              <SocialLink href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </SocialLink>
              <SocialLink href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialLink>
            </SocialLinks>
          </ContactInfo>
          
          <ContactFormContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {alertInfo.show && (
              <Alert className={alertInfo.type}>
                {alertInfo.message}
              </Alert>
            )}
            
            <form onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel>Name *</FormLabel>
                <FormInput 
                  type="text" 
                  name="name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Email *</FormLabel>
                <FormInput 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Subject</FormLabel>
                <FormInput 
                  type="text" 
                  name="subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel>Message *</FormLabel>
                <FormTextarea 
                  name="message" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                />
              </FormGroup>
              
              <button type="submit" className="btn primary">
                Send Message
              </button>
            </form>
          </ContactFormContainer>
        </ContactContent>
      </div>
    </ContactSection>
  );
};

export default Contact; 