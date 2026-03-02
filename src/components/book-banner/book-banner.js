import { motion, useAnimationFrame } from "motion/react";
import { Star, BookOpen } from "lucide-react";
import { useTranslation } from "react-i18next";
import React, { useRef, useState } from "react";
import "./book-banner.css"

export default function BookBanner({ books }) {
  const { t } = useTranslation("books_data");

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
    
    // Guard: Don't scroll if content hasn't loaded yet or isn't scrollable
    if (container.scrollWidth <= container.clientWidth) return;

    container.scrollLeft += speed;

    // Seamless loop: reset when we've scrolled exactly half of the duplicated content
    if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft = 0;
    }
  });

  const startDragging = (clientX: number) => {
    if (!scrollRef.current) return;
    setIsDragging(true);
    setStartX(clientX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const moveDragging = (clientX: number) => {
    if (!isDragging || !scrollRef.current) return;
    const x = clientX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;

    const container = scrollRef.current;
    if (container.scrollLeft <= 0) {
      container.scrollLeft = container.scrollWidth / 2;
    } else if (container.scrollLeft >= container.scrollWidth / 2) {
      container.scrollLeft = 0;
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    startDragging(e.pageX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    moveDragging(e.pageX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    startDragging(e.touches[0].pageX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    moveDragging(e.touches[0].pageX);
  };

  return (
    <section id="books" className="book-banner">
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
        onMouseUp={stopDragging}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={stopDragging}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          stopDragging();
          setIsHovered(false);
        }}
      >
        <div className="scroll-content">
          {[...books, ...books].map((book, index) => (
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
            <span>{t('footer_time')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
