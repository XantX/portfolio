import "./project.css";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectShowcase({ projects }) {

  const { t } = useTranslation("projects");

  return (
    <section id="projects" className="project-showcase">
      <div className="project-container">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="project-header"
        >
          <span className="project-section-label">{t('subtitle')}</span>
          <h2 className="project-main-title">{t('title')}</h2>
        </motion.div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card"
            >
              <div className={`project-status-tag ${project.status === 'active' ? 'status-active' : 'status-completed'}`}>
                {project.status}
              </div>
              
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech-list">
                {project.tecnology.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <a 
                  href={project.repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="repo-button"
                >
                  <Github size={18} />
                  <span>Repository</span>
                </a>
                
                <a 
                  href={project.organization}
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="org-link"
                  title="Documentation / Organization"
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
