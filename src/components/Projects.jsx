// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { portfolioConfig } from '../config/portfolio.config';
// import CustomButton from './customButton';

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const projectVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.6,
//     },
//   },
// };

// export default function Projects() {
//   const [activeTab, setActiveTab] = useState("All");
  
//   const { projects } = portfolioConfig;
// console.log(projects.thumbnail,"projects");


//   return (
//     <section id="projects" className="projects-section">
//       <div className="container">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={containerVariants}
//         >
//           <motion.h2
//             variants={projectVariants}
//             className="text-center"
//           >
//             Projects
//           </motion.h2>
//               <div className='tabs'>
//                  <CustomButton
//                  active={activeTab === "All"}
//                  onClick={() => setActiveTab("All")}
//                  >
//                   All        
//                 </CustomButton>
//                  <CustomButton
//                  active={activeTab === "web"}
//                  onClick={() => setActiveTab("web")}
//                  >
//                   Web Applications         
//                 </CustomButton>
//                 <CustomButton
//                 active={activeTab === "blockchain"}
//                 onClick={() => setActiveTab("blockchain")}
//                 >
//                   Blockchain-Powered Apps
//                 </CustomButton>
//                  <CustomButton
//                 active={activeTab === "static"}
//                 onClick={() => setActiveTab("static")}
//                 >
//                   Static Sites
//                 </CustomButton>
              
//               </div>
//           <div className="projects-grid">
//             {projects
//     .filter(project => activeTab === "All" || project.category === activeTab).map((project, index) => {
//               return (
//                 <motion.div
//                   key={index}
//                   variants={projectVariants}
//                   whileHover={{ y: -5 }}
//                   className="project-card"
//                 >
//                   <div className="project-image">
                   
//                     {project.thumbnail ? (
//                       <img 
//                         src={project.thumbnail} 
//                         alt={project.title}
//                         loading="lazy"
//                       />
//                     ) : (
//                       <div className="project-placeholder">
//                         {project.title}
//                       </div>
//                     )}
//                     <div className="project-overlay">
//                       <div className="project-buttons overlay-buttons">
//                         <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-github">
//                           Show Me
//                         </a>
//                         {project.liveUrl==="confidential"? 
//                         <p>Confidential</p>:
//                         project.liveUrl && (
//                           <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-demo">
//                             Live Demo
//                           </a>
//                         )}
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="project-content">
//                     <h4>{project.title}</h4>
//                     <p style={{ color: '#979494ff', fontSize: '0.9rem', lineHeight: '1.5' }}>
//                       {project.description}
//                     </p>
                    
//                     <div className="project-tech">
//                       {project.techStack.map((tech, i) => (
//                         <span key={i} className="tech-tag">
//                           {tech}
//                         </span>
//                       ))}
//                     </div>
                    
//                     {/* <div className="project-buttons">
//                       <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-github">
//                         GitHub
//                       </a>
//                       {project.liveUrl && (
//                         <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-demo">
//                           Live Demo
//                         </a>
//                       )}
//                     </div> */}
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioConfig } from '../config/portfolio.config';
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
  const [showAll, setShowAll] = useState(false);

  const { projects } = portfolioConfig;

  // Filter by category
  const filteredProjects = projects.filter(
    (project) => activeTab === "All" || project.category === activeTab
  );

  // Limit to 6 unless "See All" is active
  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

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

          {/* Tabs */}
          <div className="tabs">
            <CustomButton active={activeTab === "All"} onClick={() => setActiveTab("All")}>All</CustomButton>
            <CustomButton active={activeTab === "web"} onClick={() => setActiveTab("web")}>Web Applications</CustomButton>
            <CustomButton active={activeTab === "blockchain"} onClick={() => setActiveTab("blockchain")}>Blockchain-Powered Apps</CustomButton>
            <CustomButton active={activeTab === "static"} onClick={() => setActiveTab("static")}>Static Sites</CustomButton>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={index}
                variants={projectVariants}
                whileHover={{ y: -5 }}
                className="project-card"
              >
                <div className="project-image">
                  {project.thumbnail ? (
                    <img src={project.thumbnail} alt={project.title} loading="lazy" />
                  ) : (
                    <div className="project-placeholder">{project.title}</div>
                  )}
                  <div className="project-overlay">
                    <div className="project-buttons overlay-buttons">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-github">
                        Show Me
                      </a>
                      {project.liveUrl === "confidential" ? (
                        <p>Confidential</p>
                      ) : project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-demo">
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="project-content">
                  <h4>{project.title}</h4>
                  <p style={{ color: '#979494ff', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    {project.description}
                  </p>
                  <div className="project-tech">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* See More / Less Button */}
          {filteredProjects.length > 6 && (
            <div className="text-center mt-6">
              <CustomButton onClick={() => setShowAll(!showAll)}>
                {showAll ? "Show Less" : "See All Projects"}
              </CustomButton>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
