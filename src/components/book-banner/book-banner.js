import { motion, useAnimationFrame } from "motion/react";
import { Star, BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";
import React, { useRef, useState, useEffect } from "react";
import "./book-banner.css"

export default function BookBanner({ books }) {
  const { t, i18n } = useTranslation("books_data");

  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Auto-scroll speed
  const speed = 1; 

  useAnimationFrame(() => {
    if (!scrollRef.current || isDragging || isHovered) return;

    const container = scrollRef.current;
    container.scrollLeft += speed;

    // Seamless loop
    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft = 0;
    }
  });

  const handleMouseDown = (e) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;

    const container = scrollRef.current;
    if (container.scrollLeft <= 0) {
      container.scrollLeft = container.scrollWidth / 2;
    } else if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft = 0;
    }
  };

  return (
    <section className="book-banner">
      <div className="book-banner-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="book-banner-header"
        >
          <div>
            <span className="curated-label">{t('subtitle')}</span>
            <h2 className="book-banner-title">
              {t('title')}
            </h2>
          </div>
          <p className="book-banner-description">
            {t('description')}
          </p>
        </motion.div>
      </div>

      <div 
        ref={scrollRef}
        className="scroll-viewport"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeaveCapture={() => {
          setIsHovered(false);
          setIsDragging(false);
        }}
      >
        <div className="scroll-content">
          {[...books, ...books, ...books].map((book, index) => (
            <div key={`${book.id}-${index}`} className="book-card-wrapper">
              <div className="book-card">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="book-cover"
                  referrerPolicy="no-referrer"
                />
                
                <div className="status-badge-container">
                  <span className={`status-badge ${book.status === 'read' ? 'status-read' : 'status-pending'}`}>
                    {book.status === 'read' ? 'Completed' : 'Reading'}
                  </span>
                </div>

                <div className="book-overlay">
                  <div className="rating-container">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={12}
                        className={i < book.rating ? "star-filled" : "star-icon"}
                      />
                    ))}
                  </div>
                  <p className="book-meta">
                    {book.category} • {book.year}
                  </p>
                  <h3 className="book-title-overlay">{book.title}</h3>
                  <p className="book-author-overlay">{book.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="book-banner-container book-banner-footer">
        <div className="footer-line" />
        <div className="footer-content">
          <span>{books.length} {t('footer')}</span>
          <div className="footer-update">
            <BookOpen size={12} />
            <span>{t("footer_time")}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
