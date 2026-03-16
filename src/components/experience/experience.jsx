import './experience.css'

import { motion } from "motion/react";

import { useTranslation } from 'react-i18next'

export default function ExperienceTimeline({ companies }) {

  const { t } = useTranslation("experience_data");

  const calculateTotalExperience = (companies) => {
    let totalMonths = 0;
    const now = new Date();

    companies.forEach(company => {
      const [startDay, startMonth, startYear] = company.start_date.split('/').map(Number);
      const startDate = new Date(startYear, startMonth - 1, startDay);
      
      let endDate;
      if (!company.end_date || company.end_date.toLowerCase() === 'present') {
        endDate = now;
      } else {
        const [endDay, endMonth, endYear] = company.end_date.split('/').map(Number);
        // If the date is invalid (e.g. "Present" but not handled), fallback to now
        if (isNaN(endDay)) {
          endDate = now;
        } else {
          endDate = new Date(endYear, endMonth - 1, endDay);
        }
      }

      const months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
      totalMonths += Math.max(0, months);
    });

    const years = Math.floor(totalMonths / 12);
    const remainingMonths = totalMonths % 12;

    if (years === 0) return `${remainingMonths} months of experience`;
    if (remainingMonths === 0) return `${years} years of experience`;
    return `${years} years and ${remainingMonths} months of experience`;
  };

  const totalExperience = calculateTotalExperience(companies);

  return (
    <section id="experience" className="experience-timeline">
      <div className="timeline-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="timeline-header"
        >
          <span className="timeline-section-label">{t('subtitle')}</span>
          <h2 className="timeline-main-title">{t('title')}</h2>
          <p className="timeline-subtitle">{totalExperience}</p>
        </motion.div>

        <div className="timeline-wrapper">
          <div className="timeline-line" />
          
          {companies.map((company, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="timeline-item"
            >
              <div className="timeline-dot" />
              
              <div className="timeline-content">
                <div className="timeline-date">
                  {company.start_date} — {company.end_date || "Present"}
                </div>
                
                <div className="timeline-card">
                  <div className="timeline-company-info">
                    <img 
                      src={company.logo} 
                      alt={company.name} 
                      className="company-logo"
                      referrerPolicy="no-referrer"
                    />
                    <h3 className="company-name">{company.name}</h3>
                  </div>
                  
                  <span className="job-title">{company.cargo}</span>
                  <p className="job-description">{company.description}</p>
                  
                  {company.tecnologias.length > 0 && (
                    <div className="job-tech-stack">
                      {company.tecnologias.map((tech) => (
                        <span key={tech} className="job-tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
