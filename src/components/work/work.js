import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useTranslation } from 'react-i18next'
import "./work.css";

export default function WorkShowcase({ works }) {

  const { t } = useTranslation("works");

  return (
    <section id="works" className="work-showcase">
      <div className="work-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="work-header"
        >
          <span className="work-section-label">{t('subtitle')}</span>
          <h2 className="work-main-title">{t('title')}</h2>
        </motion.div>

        <div className="work-grid">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="work-card"
            >
              <div className="work-org-logo-container">
                <img 
                  src={work.organization} 
                  alt={`${work.name} logo`} 
                  className="work-org-logo"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <h3 className="work-name">{work.name}</h3>
              <p className="work-description">{work.description}</p>
              
              <div className="work-tech-stack">
                {work.tecnology.map((tech) => (
                  <span key={tech} className="work-tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="work-footer">
                <a 
                  href={work.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="visit-button"
                >
                  <span>Visit Platform</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
