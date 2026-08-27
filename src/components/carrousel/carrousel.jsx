import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Presentation, Award, ExternalLink, ChevronLeft, ChevronRight, ShieldCheck, BadgeCheck, FileCheck, Monitor, Calendar, Users, MapPin, Video, Download } from "lucide-react";
import "./carrousel.css";

export default function TalksCarrousel({ talks }) {
  const { t } = useTranslation('talks');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(talks.length / visibleCards);
  const maxIndex = Math.max(0, totalPages - 1);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [visibleCards, maxIndex, currentIndex]);

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0); // Seamless loop to the start
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(maxIndex); // Loop back to the end
    }
  };

  // Helper to map index for badges decoration
  const getBadgeIcon = (issuer) => {
    const norm = issuer.toLowerCase();
    if (norm.includes("aws") || norm.includes("amazon")) {
      return <ShieldCheck className="cert-badge-icon aws" size={24} />;
    }
    if (norm.includes("google")) {
      return <BadgeCheck className="cert-badge-icon google" size={24} />;
    }
    if (norm.includes("linux") || norm.includes("kubernetes")) {
      return <FileCheck className="cert-badge-icon k8s" size={24} />;
    }
    return <Award className="cert-badge-icon standard" size={24} />;
  };

  // Compute the correct translation percentage relative to the track's full width
  const trackWidthFactor = talks.length / visibleCards;
  const translationPercent = trackWidthFactor > 0 ? (currentIndex * 100) / trackWidthFactor : 0;

  return (
    <section className="certificates-carousel-section" id="certificates">
      <div className="certs-container">
        
        {/* Header containing title and navigation arrows */}
        <div className="certs-header-row">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="certs-title-area"
          >
            <span className="certs-section-label">{t('subtitle')}</span>
            <h2 className="certs-main-title">{t('title')}</h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="certs-nav-controls"
          >
            {/* Visual Slide Counter */}
            <span className="certs-counter">
              {String(currentIndex + 1).padStart(2, "0")} / {String(maxIndex + 1).padStart(2, "0")}
            </span>

            <div className="certs-arrow-buttons">
              <button 
                onClick={prevSlide} 
                className="certs-nav-btn prev"
                aria-label="Previous Certificate"
                id="certs-prev-btn"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextSlide} 
                className="certs-nav-btn next"
                aria-label="Next Certificate"
                id="certs-next-btn"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Carousel Slider */}
        <div className="certs-carousel-viewport">
          <motion.div 
            className="certs-carousel-track"
            animate={{ x: `-${translationPercent}%` }}
            transition={{ type: "spring", stiffness: 220, damping: 26 }}
            style={{
              width: `${(talks.length / visibleCards) * 100}%`
            }}
          >
            {talks.map((talk, index) => (
              <motion.div
                key={talk.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="talk-card-outer"
              >
                <div className="talk-card">
                  <div className="certs-card-header">
                    <div className="talk-main-icons">
                      <Presentation size={32} className="talk-main-icon" />
                      {talk.isVirtual && <Monitor size={20} className="talk-virtual-icon" title="Virtual Talk" />}
                    </div>
                    <div className="talk-date-badge">
                      <Calendar size={14} />
                      <span>{talk.date}</span>
                    </div>
                  </div>
                  
                  <div className="certs-card-body">
                    <h3 className="talk-title">{talk.title}</h3>
                    <div className="talk-meta">
                      <div className="meta-item">
                        <Users size={16} />
                        <span>{talk.audience}</span>
                      </div>
                      <div className="meta-item">
                        {talk.isVirtual && talk.videoLink ? (
                          <a 
                            href={talk.videoLink} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="location-link virtual"
                            title="Watch recording"
                          >
                            <Video size={16} />
                            <span>{talk.location}{t("video_description")}</span>
                          </a>
                        ) : (
                            <>
                              <MapPin size={16} />
                              <span>{talk.location}</span>
                            </>
                          )}
                      </div>
                    </div>
                    <p className="talk-description">{talk.description}</p>
                  </div>
                  
                  <div className="cert-tags-row">
                    {talk.tags.map((tag) => (
                      <span key={tag} className="talk-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="certs-card-footer">
                    <a 
                      href={talk.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`talk-button ${talk.type}`}
                    >
                      {talk.type === "drive" ? (
                        <>
                          <ExternalLink size={18} />
                          <span>{t("presentation_button")}</span>
                        </>
                      ) : (
                        <>
                          <Download size={18} />
                          <span>{t("download_button")}</span>
                        </>
                      )}
                    </a>
                  </div>
                </div>
              </motion.div>
          ))}
          </motion.div>
        </div>

        {/* Dot Indicators */}
        {maxIndex > 0 && (
          <div className="certs-indicators-row">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`certs-dot ${currentIndex === i ? "active" : ""}`}
                aria-label={`Go to slide ${i + 1}`}
                id={`certs-dot-${i}`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
