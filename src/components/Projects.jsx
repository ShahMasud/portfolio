import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import { motion } from "motion/react"
import { portfolioConfig } from '../config/portfolio.config';

// Import project thumbnails
import zimo from '../assets/ZIMO.png';
import dcs from '../assets/dcs.png';
import reign from '../assets/reign-1.png';
import luv from '../assets/luv.png';
import tiger from '../assets/empireoftiger.png';
import hopiumbet from '../assets/hopiumbet.png';
import kerks from '../assets/kerks.png';
import CustomButton from './customButton';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  
  const { projects } = portfolioConfig;
console.log(activeTab);


  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.h2
            variants={projectVariants}
            className="text-center"
          >
            Projects
          </motion.h2>
              <div className='tabs'>
                 <CustomButton
                 active={activeTab === "All"}
                 onClick={() => setActiveTab("All")}
                 >
                  All        
                </CustomButton>
                 <CustomButton
                 active={activeTab === "web"}
                 onClick={() => setActiveTab("web")}
                 >
                  Web Applications         
                </CustomButton>
                <CustomButton
                active={activeTab === "blockchain"}
                onClick={() => setActiveTab("blockchain")}
                >
                  Blockchain-Powered Apps
                </CustomButton>
                 <CustomButton
                active={activeTab === "static"}
                onClick={() => setActiveTab("static")}
                >
                  Static Sites
                </CustomButton>
              
              </div>
          <div className="projects-grid">
            {projects
    .filter(project => activeTab === "All" || project.category === activeTab).map((project, index) => {
      
              // Map thumbnails to projects
              let thumbnail = null;
              if (project.title === "ZIMO Pro") thumbnail = zimo;
              if (project.title === "Data Center Sustainability") thumbnail = dcs;
              if (project.title === "Reign of Immortals") thumbnail = reign;
              if (project.title === "LUV") thumbnail = luv;
              if (project.title === "The Empire of Tiger") thumbnail = tiger;
              if (project.title === "HOPIUMBET") thumbnail = hopiumbet;
              if (project.title === "KEREKS STAKING") thumbnail = kerks;

              



              
              return (
                <motion.div
                  key={index}
                  variants={projectVariants}
                  whileHover={{ y: -5 }}
                  className="project-card"
                >
                  <div className="project-image">
                    {thumbnail ? (
                      <img 
                        src={thumbnail} 
                        alt={project.title}
                        loading="lazy"
                      />
                    ) : (
                      <div className="project-placeholder">
                        {project.title}
                      </div>
                    )}
                    <div className="project-overlay">
                      <div className="project-buttons overlay-buttons">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-github">
                          Show Me
                        </a>
                        {project.liveUrl==="confidential"? 
                        <p>Confidential</p>:
                        project.liveUrl && (
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-demo">
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="project-content">
                    <h4>{project.title}</h4>
                    <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.5' }}>
                      {project.description}
                    </p>
                    
                    <div className="project-tech">
                      {project.techStack.map((tech, i) => (
                        <span key={i} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* <div className="project-buttons">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-github">
                        GitHub
                      </a>
                      {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-demo">
                          Live Demo
                        </a>
                      )}
                    </div> */}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
