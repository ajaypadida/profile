import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaDatabase, FaGit, FaFigma, FaPython, FaChartBar, FaUsers, FaClock } from 'react-icons/fa';
import { SiTensorflow, SiKeras, SiPandas, SiNumpy, SiMicrosoftexcel, SiScikit, SiSeaborn } from 'react-icons/si';
import { MdOutlineAdaptive, MdPsychology } from 'react-icons/md';

const SkillsSection = styled.section`
  background-color: var(--bg-light);
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCard = styled(motion.div)`
  background-color: white;
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow);
  transition: var(--transition);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const SkillHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
  color: var(--primary-color);
`;

const SkillTitle = styled.h3`
  margin: 0;
`;

const ProgressBar = styled.div`
  background-color: var(--bg-light);
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 1.5rem;
`;

const Progress = styled.div`
  height: 100%;
  background-color: var(--primary-color);
  border-radius: 4px;
  width: 0;
  transition: width 1s ease-in-out;
`;

const SkillDescription = styled.p`
  color: var(--secondary-color);
  font-size: 0.95rem;
`;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Tag = styled.span`
  background-color: var(--bg-light);
  color: var(--secondary-color);
  padding: 0.35rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const skillsData = [
  {
    id: 1,
    title: 'Python Programming',
    icon: <FaPython />,
    proficiency: 90,
    description: 'Proficient in Python programming for data analysis, automation, and backend development.',
    tags: ['Python', 'Object-Oriented Programming', 'Scripting', 'Automation', 'Data Processing'],
  },
  {
    id: 2,
    title: 'Data Analysis & Visualization',
    icon: <FaChartBar />,
    proficiency: 85,
    description: 'Analyzing and visualizing complex datasets to extract meaningful insights and patterns.',
    tags: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Data Cleaning', 'Statistical Analysis'],
  },
  {
    id: 3,
    title: 'Machine Learning',
    icon: <SiTensorflow />,
    proficiency: 75,
    description: 'Implementing machine learning models for predictive analysis and pattern recognition.',
    tags: ['TensorFlow', 'Keras', 'Scikit-Learn', 'Classification', 'Regression', 'Neural Networks'],
  },
  {
    id: 4,
    title: 'Database Management',
    icon: <FaDatabase />,
    proficiency: 80,
    description: 'Designing and querying databases for efficient data storage and retrieval operations.',
    tags: ['SQL', 'Database Design', 'Data Modeling', 'Query Optimization', 'CRUD Operations'],
  },
  {
    id: 5,
    title: 'Web Development',
    icon: <FaHtml5 />,
    proficiency: 70,
    description: 'Creating responsive and functional web applications with modern HTML, CSS and basic JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Web Accessibility'],
  },
  {
    id: 6,
    title: 'Soft Skills',
    icon: <FaUsers />,
    proficiency: 85,
    description: 'Essential interpersonal and professional skills that enhance technical capabilities and teamwork.',
    tags: ['Adaptability', 'Eager to Learn', 'Time Management', 'Teamwork', 'Communication'],
  },
];

const Skills = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  const progressRefs = useRef([]);
  
  useEffect(() => {
    if (inView) {
      controls.start('visible');
      
      // Animate progress bars
      progressRefs.current.forEach((progressRef, index) => {
        if (progressRef) {
          setTimeout(() => {
            progressRef.style.width = `${skillsData[index].proficiency}%`;
          }, 300 * index);
        }
      });
    }
  }, [controls, inView]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  
  return (
    <SkillsSection id="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <SkillsContainer>
            {skillsData.map((skill, index) => (
              <SkillCard key={skill.id} variants={cardVariants}>
                <SkillHeader>
                  <SkillIcon>{skill.icon}</SkillIcon>
                  <SkillTitle>{skill.title}</SkillTitle>
                </SkillHeader>
                
                <ProgressBar>
                  <Progress 
                    ref={el => progressRefs.current[index] = el}
                    style={{ width: '0%' }}  // Initially set to 0
                  />
                </ProgressBar>
                
                <SkillDescription>{skill.description}</SkillDescription>
                
                <TagContainer>
                  {skill.tags.map((tag, tagIndex) => (
                    <Tag key={tagIndex}>{tag}</Tag>
                  ))}
                </TagContainer>
              </SkillCard>
            ))}
          </SkillsContainer>
        </motion.div>
      </div>
    </SkillsSection>
  );
};

export default Skills; 