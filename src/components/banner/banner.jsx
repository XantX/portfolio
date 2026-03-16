import { useTranslation } from "react-i18next";
import UserCard from "../github-card/user-card";
import "./banner.css"
import useFileUrl from "../../shared/download-cv";
import { motion } from "motion/react";
import { Download } from "lucide-react";

function Banner() {
  const { t } = useTranslation('banner');
  const cvUrl = useFileUrl()
  return (
    <section className="hero-banner" id="about">
      <div className="hero-container">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="hero-content"
        >
          <span className="hero-welcome">{t('greetings')}</span>
          <h1 className="hero-name">Sebastian Diaz Torres</h1>
          <p className="hero-specialization">
            {t('main-skill')}
            <span>{t('skill')}</span>. {t('description')}
          </p>
          <a
            href={cvUrl}
            className="download-cv-btn"
            download="sebastiandiaz-cv.pdf"
          >
            <Download size={18} />
            <span>{t('cv')}</span>
          </a>
        </motion.div>
        <UserCard></UserCard>
      </div>
    </section>
  );
}

export default Banner;
