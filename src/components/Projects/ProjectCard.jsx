import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, description = [], skills = [], demo, note },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [projectImages, setProjectImages] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [nextImageIndex, setNextImageIndex] = useState(0);

  // Simplified image loading
  useEffect(() => {
    const images = [];
    for (let i = 1; i <= 3; i++) {
      const imagePath = `images/projects/${title.toLowerCase().replace(/\s+/g, '-')}/p${i}.png`;
      images.push(imagePath);
    }
    setProjectImages(images);
  }, [title]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const openModal = () => {
    if (projectImages.length > 0) {
      setCurrentImageIndex(0);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageIndex(0);
    setIsTransitioning(false);
    setNextImageIndex(0);
  };

  const changeImage = (newIndex) => {
    if (newIndex === currentImageIndex || isTransitioning) return;
    
    setIsTransitioning(true);
    setNextImageIndex(newIndex);
    
    // After transition completes, update current index
    setTimeout(() => {
      setCurrentImageIndex(newIndex);
      setIsTransitioning(false);
    }, 400); // Match CSS transition duration
  };

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % projectImages.length;
    changeImage(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + projectImages.length) % projectImages.length;
    changeImage(newIndex);
  };

  // Handle touch events for swipe navigation on mobile
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (projectImages.length > 1) {
      if (isLeftSwipe) {
        nextImage();
      } else if (isRightSwipe) {
        prevImage();
      }
    }
  };

  // Simple Modal component
  const Modal = () => (
    <div 
      className={styles.modalOverlay} 
      onClick={closeModal}
    >
      <div 
        className={styles.modalContent} 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Arrow - Outside image */}
        {projectImages.length > 1 && (
          <button 
            className={styles.navButton}
            onClick={prevImage}
            type="button"
            aria-label="Previous image"
          >
            &#8249;
          </button>
        )}

        <div 
          className={styles.imageContainer}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <button 
            className={styles.closeButton} 
            onClick={closeModal}
            type="button"
            aria-label="Close modal"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <div className={styles.imageWrapper}>
            {/* Current Image */}
            <img
              src={projectImages[currentImageIndex]}
              alt={`${title} Screenshot ${currentImageIndex + 1}`}
              className={`${styles.modalImage} ${styles.currentImage} ${isTransitioning ? styles.fadeOut : styles.fadeIn}`}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            
            {/* Next Image (for smooth transition) */}
            {isTransitioning && (
              <img
                src={projectImages[nextImageIndex]}
                alt={`${title} Screenshot ${nextImageIndex + 1}`}
                className={`${styles.modalImage} ${styles.nextImage} ${styles.fadeIn}`}
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            )}
          </div>

          {/* Image Counter */}
          {projectImages.length > 1 && (
            <div className={styles.imageCounter}>
              {currentImageIndex + 1} / {projectImages.length}
            </div>
          )}
        </div>

        {/* Right Arrow - Outside image */}
        {projectImages.length > 1 && (
          <button 
            className={styles.navButton}
            onClick={nextImage}
            type="button"
            aria-label="Next image"
          >
            &#8250;
          </button>
        )}
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <ul className={styles.descriptions}>
        {description.map((desc, id) => (
          <li key={id} className={styles.description}>{desc}</li>
        ))}
      </ul>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>{skill}</li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link} target="_blank" rel="noreferrer">
          Webview
        </a>
        {projectImages.length > 0 && (
          <button 
            className={styles.imageButton} 
            onClick={openModal}
            type="button"
          >
            View Screenshots
          </button>
        )}
      </div>
      {note && <div className={styles.note}>{note}</div>}

      {isModalOpen && createPortal(<Modal />, document.body)}
    </div>
  );
};