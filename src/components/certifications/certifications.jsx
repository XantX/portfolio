import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import { Award, ExternalLink, ChevronLeft, ChevronRight, ShieldCheck, BadgeCheck, FileCheck } from "lucide-react";
import "./CertificatesCarousel.css";

export default function CertificatesCarousel({ certificates }) {
  const { t } = useTranslation('certifications');
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

  const totalPages = Math.ceil(certificates.length / visibleCards);
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
  const trackWidthFactor = certificates.length / visibleCards;
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
              width: `${(certificates.length / visibleCards) * 100}%`
            }}
          >
            {certificates.map((cert) => (
              <div 
                key={cert.id}
                className="certs-card-outer"
                style={{ width: `${100 / certificates.length}%` }}
              >
                <div className="certs-card">
                  
                  {/* Card Header Decors */}
                  <div className="certs-card-header">
                    <div className="cert-badge-wrapper bg1">
                      {getBadgeIcon(cert.issuer)}
                      <span className="cert-issuer-text">{cert.issuer}</span>
                    </div>
                    <span className="cert-date-tag">{cert.date}</span>
                  </div>

                  {/* Card Content */}
                  <div className="certs-card-body">
                    <h3 className="cert-name">{cert.name}</h3>
                    <p className="cert-description">{cert.description}</p>
                  </div>

                  {/* Card Tags */}
                  <div className="cert-tags-row">
                    {cert.tags.map((tag) => (
                      <span key={tag} className="cert-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Footer Button Container */}
                  <div className="certs-card-footer">
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="cert-action-btn"
                      id={`cert-btn-${cert.id}`}
                    >
                      <ExternalLink size={16} />
                      <span>{t('button_title')}</span>
                    </a>
                  </div>

                </div>
              </div>
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
