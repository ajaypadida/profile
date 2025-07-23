import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaDownload, FaUser, FaGraduationCap, FaBriefcase, FaAward, FaUserTie } from 'react-icons/fa';

const AboutSection = styled.section`
  background-color: var(--bg-color);
`;

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutImage = styled.div`
  text-align: center;
  
  @media (max-width: 992px) {
    order: -1;
  }
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-color: var(--bg-light);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  overflow: hidden;
  border: 5px solid var(--primary-color);
  
  i {
    font-size: 8rem;
    color: var(--secondary-color);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AboutText = styled.div`
  p {
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
    line-height: 1.7;
  }
`;

const InfoTabs = styled.div`
  display: flex;
  margin-bottom: 2rem;
  border-bottom: 1px solid var(--bg-light);
`;

const Tab = styled.button`
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: none;
  font-weight: ${props => props.active ? '600' : '400'};
  color: ${props => props.active ? 'var(--primary-color)' : 'var(--text-color)'};
  position: relative;
  cursor: pointer;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 0;
    width: ${props => props.active ? '100%' : '0'};
    height: 2px;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
  }
`;

const TabContent = styled(motion.div)`
  margin-top: 1.5rem;
`;

const InfoList = styled.ul`
  list-style: none;
  margin-bottom: 1.5rem;
  
  li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    
    svg {
      color: var(--primary-color);
      margin-right: 1rem;
      font-size: 1.2rem;
      margin-top: 0.25rem;
    }
  }
`;

const Timeline = styled.div`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 8px;
    top: 0;
    height: 100%;
    width: 2px;
    background-color: var(--bg-light);
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 30px;
  margin-bottom: 2rem;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 5px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: var(--primary-color);
  }
`;

const TimelinePeriod = styled.p`
  color: var(--secondary-color);
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h4`
  margin-bottom: 0.5rem;
`;

const TimelineSubtitle = styled.p`
  color: var(--secondary-color);
  font-style: italic;
  margin-bottom: 0.5rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
`;

const SkillCard = styled.div`
  background-color: var(--bg-light);
  padding: 1.2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  text-align: center;
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.08);
  }
  
  h4 {
    margin-top: 0.8rem;
    margin-bottom: 0.5rem;
    font-size: 1rem;
  }
  
  p {
    color: var(--secondary-color);
    font-size: 0.9rem;
    margin-bottom: 0;
  }
`;

const SkillIcon = styled.div`
  width: 50px;
  height: 50px;
  background: var(--gradient-bg);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: white;
  font-size: 1.2rem;
`;

const About = () => {
  const [activeTab, setActiveTab] = React.useState('about');
  
  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  
  return (
    <AboutSection id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <AboutContent>
          <AboutImage>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ImageContainer>
                {/* Replace with your image or use the icon */}
                <FaUser />
                {/* <img src="/path/to/your/image.jpg" alt="Profile" /> */}
              </ImageContainer>
            </motion.div>
          </AboutImage>
          
          <AboutText>
            <InfoTabs>
              <Tab 
                active={activeTab === 'about'} 
                onClick={() => setActiveTab('about')}
              >
                About
              </Tab>
              <Tab 
                active={activeTab === 'education'} 
                onClick={() => setActiveTab('education')}
              >
                Education
              </Tab>
              <Tab 
                active={activeTab === 'experience'} 
                onClick={() => setActiveTab('experience')}
              >
                Experience
              </Tab>
              <Tab 
                active={activeTab === 'soft-skills'} 
                onClick={() => setActiveTab('soft-skills')}
              >
                Soft Skills
              </Tab>
            </InfoTabs>
            
            {activeTab === 'about' && (
              <TabContent
                key="about"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
              >
                <p>
                  Hello! I'm a Computer Science student with a passion for data analysis and web development. I specialize in Python programming, data manipulation using libraries like Pandas and NumPy, and creating visualizations with Matplotlib.
                </p>
                <p>
                  My journey in technology started with a curiosity about how data can be leveraged to solve complex problems and create meaningful insights. I enjoy working with datasets, identifying patterns, and building solutions that meet both user needs and business goals.
                </p>
                <p>
                  Beyond coding, I'm constantly expanding my knowledge in machine learning frameworks like TensorFlow and Keras. I believe in creating applications that not only function well but also provide valuable insights through data analysis.
                </p>
                
                <h4 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Languages & Interests</h4>
                <InfoList>
                  <li>
                    <i className="fas fa-language"></i>
                    <div>
                      <strong>Languages:</strong> Telugu, English
                    </div>
                  </li>
                  <li>
                    <i className="fas fa-plane"></i>
                    <div>
                      <strong>Interests:</strong> Travelling
                    </div>
                  </li>
                </InfoList>
                
                <InfoList>
                  <li>
                    <FaUser />
                    <div>
                      <strong>Name:</strong> Padida Ajay
                    </div>
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    <div>
                      <strong>Email:</strong> ajaypadida7@gmail.com
                    </div>
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>
                    <div>
                      <strong>Phone:</strong> 8919832684
                    </div>
                  </li>
                  <li>
                    <FaAward />
                    <div>
                      <strong>Field of Study:</strong> Computer Science
                    </div>
                  </li>
                </InfoList>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <a href="/resume.pdf" className="btn download-cv" download>
                    <FaDownload /> Download CV
                  </a>
                </motion.div>
              </TabContent>
            )}
            
            {activeTab === 'education' && (
              <TabContent
                key="education"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
              >
                <Timeline>
                  <TimelineItem>
                    <TimelinePeriod>2022 - 2026</TimelinePeriod>
                    <TimelineTitle>Bachelor of Technology in Computer Science Engineering</TimelineTitle>
                    <TimelineSubtitle>Teegala Krishna Reddy College, Hyderabad</TimelineSubtitle>
                    <p>Currently pursuing a B.Tech degree in Computer Science with a focus on programming, data analysis, and machine learning technologies.</p>
                  </TimelineItem>
                  
                  <TimelineItem>
                    <TimelinePeriod>2020 - 2022</TimelinePeriod>
                    <TimelineTitle>Intermediate</TimelineTitle>
                    <TimelineSubtitle>Sri Chaithanya Junior College</TimelineSubtitle>
                    <p>Completed intermediate education with focus on science and mathematics.</p>
                  </TimelineItem>

                  <TimelineItem>
                    <TimelinePeriod>2019 - 2020</TimelinePeriod>
                    <TimelineTitle>SSC</TimelineTitle>
                    <TimelineSubtitle>Brooklyn Grammar High School, Metpally</TimelineSubtitle>
                    <p>Completed secondary school education with strong academic performance.</p>
                  </TimelineItem>
                </Timeline>
              </TabContent>
            )}
            
            {activeTab === 'experience' && (
              <TabContent
                key="experience"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
              >
                <Timeline>
                  <TimelineItem>
                    <TimelinePeriod>2023</TimelinePeriod>
                    <TimelineTitle>COVID-19 Data Analysis Project</TimelineTitle>
                    <TimelineSubtitle>Academic Project</TimelineSubtitle>
                    <p>Analyzed COVID-19 dataset using Python and data visualization libraries to identify trends and patterns. Created interactive dashboards to present findings in an accessible format.</p>
                  </TimelineItem>
                  
                  <TimelineItem>
                    <TimelinePeriod>2022 - Present</TimelinePeriod>
                    <TimelineTitle>Computer Science Student</TimelineTitle>
                    <TimelineSubtitle>University</TimelineSubtitle>
                    <p>Actively participating in programming competitions, collaborative projects, and continuous learning of new technologies and frameworks.</p>
                  </TimelineItem>
                </Timeline>
              </TabContent>
            )}
            
            {activeTab === 'soft-skills' && (
              <TabContent
                key="soft-skills"
                variants={tabVariants}
                initial="hidden"
                animate="visible"
              >
                <p>
                  Beyond technical skills, I've developed a strong set of soft skills that enable me to work effectively in teams,
                  adapt to changing circumstances, and deliver quality results.
                </p>
                
                <SkillsGrid>
                  <SkillCard>
                    <SkillIcon>
                      <i className="fas fa-sync-alt"></i>
                    </SkillIcon>
                    <h4>Adaptability</h4>
                    <p>Quickly adjust to new challenges and environments</p>
                  </SkillCard>
                  
                  <SkillCard>
                    <SkillIcon>
                      <i className="fas fa-book-reader"></i>
                    </SkillIcon>
                    <h4>Eager to Learn</h4>
                    <p>Continuously seeking new knowledge and skills</p>
                  </SkillCard>
                  
                  <SkillCard>
                    <SkillIcon>
                      <i className="fas fa-clock"></i>
                    </SkillIcon>
                    <h4>Time Management</h4>
                    <p>Efficiently organizing tasks and meeting deadlines</p>
                  </SkillCard>
                  
                  <SkillCard>
                    <SkillIcon>
                      <i className="fas fa-users"></i>
                    </SkillIcon>
                    <h4>Teamwork</h4>
                    <p>Collaborating effectively with diverse team members</p>
                  </SkillCard>
                  
                  <SkillCard>
                    <SkillIcon>
                      <i className="fas fa-comments"></i>
                    </SkillIcon>
                    <h4>Communication</h4>
                    <p>Clearly expressing ideas in written and verbal forms</p>
                  </SkillCard>
                </SkillsGrid>
              </TabContent>
            )}
          </AboutText>
        </AboutContent>
      </div>
    </AboutSection>
  );
};

export default About;