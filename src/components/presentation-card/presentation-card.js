import "./presentation-card.css";
import "./about-me.css";
import { useTranslation } from 'react-i18next'
import SendCopyEmail from "../send-copy-email/send-copy-email";
import { motion } from "motion/react";
import { Terminal, Cpu, Layout, Code2, Database, Coffee } from "lucide-react";

function PresentacionCard() {
  const { t } = useTranslation('presentation_card')

  return (
      <section className="about-me">
            <div className="about-container">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="about-card"
              >
                <h2 className="about-title">
                  <Terminal size={28} />
                  {t('title')}
                </h2>

                <div className="about-text">
                  <p>
                    {t('first_paragraph')}
                  </p>
                  <p>
                    {t('fourth_paragraph')}
                  </p>
                  <p>
                    {t('fifth_paragraph')}
                  </p>
                  <p>
                    {t('sixth_paragraph')}
                  </p>
                </div>

                <SendCopyEmail></SendCopyEmail>

                <div className="skills-divider" />

                <div className="skills-grid">
                  <div className="skills-group">
                    <span className="skills-group-title">{t('backend_skills_title')}</span>
                    <span className="skills-subtitle">{t('backend_skills_content')}</span>
                    <div className="skills-icons">
                      <div className="skill-item">
                        <div className="skill-icon-wrapper"><Coffee size={24} /></div>
                        <span className="skill-name">Java</span>
                      </div>
                      <div className="skill-item">
                        <div className="skill-icon-wrapper"><Code2 size={24} /></div>
                        <span className="skill-name">Node.js</span>
                      </div>
                      <div className="skill-item">
                        <div className="skill-icon-wrapper"><Database size={24} /></div>
                        <span className="skill-name">Python</span>
                      </div>
                    </div>
                  </div>

                  <div className="skills-group">
                    <span className="skills-group-title">{t('frontend_skills_title')}</span>
                    <span className="skills-subtitle">{t('frontend_skills_content')}</span>
                    <div className="skills-icons">
                      <div className="skill-item">
                        <div className="skill-icon-wrapper"><Layout size={24} /></div>
                        <span className="skill-name">HTML/CSS</span>
                      </div>
                      <div className="skill-item">
                        <div className="skill-icon-wrapper"><Cpu size={24} /></div>
                        <span className="skill-name">Bootstrap</span>
                      </div>
                      <div className="skill-item">
                        <div className="skill-icon-wrapper"><Code2 size={24} /></div>
                        <span className="skill-name">React</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
  );
}

export default PresentacionCard;
