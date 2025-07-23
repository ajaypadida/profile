import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChartLine, FaCode } from 'react-icons/fa';

const ProjectsSection = styled.section`
  background-color: var(--bg-color);
`;

const ProjectFilters = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 10px;
`;

const FilterButton = styled.button`
  padding: 8px 20px;
  background-color: ${props => props.active ? 'var(--primary-color)' : 'transparent'};
  color: ${props => props.active ? 'white' : 'var(--text-color)'};
  border: 1px solid ${props => props.active ? 'var(--primary-color)' : 'var(--secondary-color)'};
  border-radius: var(--border-radius);
  cursor: pointer;
  font-weight: 500;
  transition: var(--transition);
  
  &:hover {
    background-color: var(--primary-color);
    color: white;
    border-color: var(--primary-color);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
  background-color: white;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ProjectImage = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${ProjectCard}:hover & img {
    transform: scale(1.05);
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  margin-bottom: 0.5rem;
  font-size: 1.3rem;
`;

const ProjectDescription = styled.p`
  margin-bottom: 1rem;
  color: var(--secondary-color);
  font-size: 0.95rem;
`;

const ProjectDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: var(--secondary-color);
  
  svg {
    color: var(--primary-color);
  }
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 1rem 0;
`;

const Tag = styled.span`
  background-color: var(--bg-light);
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 1rem;
`;

const IconLink = styled.a`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
  color: var(--primary-color);
  
  &:hover {
    text-decoration: underline;
  }
`;

const projectsData = [
  {
    id: 1,
    title: 'COVID-19 Data Analysis',
    category: 'data',
    image: 'https://via.placeholder.com/350x200',
    description: 'Developed a COVID-19 data analysis project using Python, leveraging data visualization and statistical techniques to explore trends, case distributions, and impacts. The project provided insights into infection rates, recoveries, and fatalities using real-world datasets.',
    client: 'Academic Project',
    duration: '2 months',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Jupyter Notebook'],
    features: [
      'Data cleaning and preprocessing of COVID-19 datasets',
      'Statistical analysis of case numbers and distribution patterns',
      'Visualization of infection rates, recoveries, and fatality trends',
      'Correlation analysis between different pandemic factors',
      'Interactive dashboard for data exploration',
      'Time-series analysis of pandemic progression across regions'
    ],
    liveDemoLink: 'https://github.com/',
    githubLink: 'https://github.com/',
  },
  {
    id: 2,
    title: 'E-commerce Website',
    category: 'web',
    image: 'https://via.placeholder.com/350x200',
    description: 'A full-featured online store with shopping cart, payment integration, and admin dashboard.',
    client: 'Personal Project',
    duration: '3 months',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
    features: [
      'User authentication and authorization',
      'Product browsing and filtering',
      'Shopping cart functionality',
      'Secure payment processing',
      'Admin product management',
      'Order tracking system'
    ],
    liveDemoLink: 'https://example.com',
    githubLink: 'https://github.com/yourusername/ecommerce',
  },
  {
    id: 3,
    title: 'Task Manager App',
    category: 'app',
    image: 'https://via.placeholder.com/350x200',
    description: 'A productivity app for managing daily tasks and projects with collaborative features.',
    client: 'Startup Client',
    duration: '2 months',
    technologies: ['React', 'Firebase', 'Material UI', 'Context API'],
    features: [
      'Task creation and organization',
      'Project management',
      'User collaboration',
      'Real-time updates',
      'Deadline reminders',
      'Data visualization'
    ],
    liveDemoLink: 'https://example.com',
    githubLink: 'https://github.com/yourusername/taskmanager',
  },
  {
    id: 4,
    title: 'Portfolio Website Template',
    category: 'web',
    image: 'https://via.placeholder.com/350x200',
    description: 'A customizable portfolio website template for creative professionals and developers.',
    client: 'Open Source Project',
    duration: '1 month',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP Animation'],
    features: [
      'Responsive design',
      'Modern UI/UX',
      'Project showcase',
      'Contact form',
      'Animated sections',
      'Easy customization'
    ],
    liveDemoLink: 'https://example.com',
    githubLink: 'https://github.com/yourusername/portfolio-template',
  },
  {
    id: 5,
    title: 'Data Visualization Dashboard',
    category: 'data',
    image: 'https://via.placeholder.com/350x200',
    description: 'Interactive dashboard for visualizing and analyzing complex datasets with filtering capabilities.',
    client: 'Academic Project',
    duration: '6 weeks',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Jupyter', 'Streamlit'],
    features: [
      'Interactive data filtering',
      'Multiple visualization types',
      'Data export functionality',
      'Statistical summaries',
      'User-friendly interface',
      'Real-time data updates'
    ],
    liveDemoLink: 'https://example.com',
    githubLink: 'https://github.com/',
  },
  {
    id: 6,
    title: 'Weather Forecast Dashboard',
    category: 'app',
    image: 'https://via.placeholder.com/350x200',
    description: 'A weather application that provides real-time forecasts and historical weather data.',
    client: 'Personal Project',
    duration: '1 month',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'Styled Components'],
    features: [
      'Location-based weather forecast',
      'Interactive weather maps',
      'Historical weather data',
      'Weather alerts',
      'UV index tracking',
      'Dashboard customization'
    ],
    liveDemoLink: 'https://example.com',
    githubLink: 'https://github.com/yourusername/weather-app',
  },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    
    if (filter === 'all') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === filter));
    }
  };
  
  return (
    <ProjectsSection id="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <ProjectFilters>
          <FilterButton 
            active={activeFilter === 'all'} 
            onClick={() => handleFilterClick('all')}
          >
            All
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'web'} 
            onClick={() => handleFilterClick('web')}
          >
            Web
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'app'} 
            onClick={() => handleFilterClick('app')}
          >
            App
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'data'} 
            onClick={() => handleFilterClick('data')}
          >
            Data
          </FilterButton>
        </ProjectFilters>
        
        <AnimatePresence mode="wait">
          <ProjectsGrid>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                layout
              >
                <ProjectImage>
                  <img src={project.image} alt={project.title} />
                  <ProjectOverlay>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.liveDemoLink && (
                        <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="btn small primary">
                          View Project
                        </a>
                      )}
                    </motion.div>
                  </ProjectOverlay>
                </ProjectImage>
                
                <ProjectInfo>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  
                  <ProjectDetail>
                    <span>Client:</span> {project.client}
                  </ProjectDetail>
                  <ProjectDetail>
                    <span>Duration:</span> {project.duration}
                  </ProjectDetail>
                  
                  <TagContainer>
                    {project.technologies.map((tech, index) => (
                      <Tag key={index}>{tech}</Tag>
                    ))}
                  </TagContainer>
                  
                  <ProjectDescription>
                    <strong>Key Features:</strong>
                    <ul>
                      {project.features.slice(0, 3).map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </ProjectDescription>
                  
                  <ProjectLinks>
                    {project.liveDemoLink && (
                      <IconLink href={project.liveDemoLink} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt /> Live Demo
                      </IconLink>
                    )}
                    
                    {project.githubLink && (
                      <IconLink href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <FaGithub /> Source Code
                      </IconLink>
                    )}
                  </ProjectLinks>
                </ProjectInfo>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </AnimatePresence>
      </div>
    </ProjectsSection>
  );
};

export default Projects; 