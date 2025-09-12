import React, { useState, useEffect } from "react";
import styles from "./Achievements.module.css";

function Achievements() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const achievements = [
    {
      title: "1st Place - Tech Tre2",
      description: "Won the Tech Tre2 competitive programming event.",
      icon: "🏅",
      gradient: "gradientYellow"
    },
    {
      title: "Deep Blue Hackathon All-India Finalist",
      description: "Selected as one of the top finalists in the prestigious Deep Blue Hackathon, competing against teams from across India.",
      icon: "🌐",
      gradient: "gradientBlue"
    },
    {
      title: "Coding Ninjas Top Performer",
      description: "One of the top 100 performers among 16,000 participants in Coding Ninjas competition.",
      icon: "💻",
      gradient: "gradientGreen"
    },
    {
      title: "Innothon Hackathon Finalist",
      description: "Selected as a finalist in the prestigious Innothon Hackathon 2024.",
      icon: "🚀",
      gradient: "gradientPurple"
    },
    {
      title: "Hackomania 5th Place",
      description: "Secured 5th place in the competitive Hackomania 2024 hackathon.",
      icon: "🏆",
      gradient: "gradientAmber"
    },
    {
      title: "Innovation Nexus Best Performer",
      description: "Recognized as the best performer in the college's software project competition.",
      icon: "🌟",
      gradient: "gradientCyan"
    },
    {
      title: "Football Tournament Champion",
      description: "Winner of the 2024 Football Tournament, showcasing team spirit and athletic skills.",
      icon: "⚽",
      gradient: "gradientEmerald"
    },
    {
      title: "TechBridge Innovations Founder",
      description: "CEO and Founder of TechBridge Innovations, driving technological innovation.",
      icon: "🏢",
      gradient: "gradientIndigo"
    },
    {
      title: "IEEE Event Winner",
      description: "Emerged victorious in the IEEE technical event, demonstrating technical excellence.",
      icon: "📡",
      gradient: "gradientTeal"
    },
    {
      title: "SkillRack Problem Solver",
      description: "Solved over 1,300 problems on SkillRack, showcasing programming prowess.",
      icon: "🧩",
      gradient: "gradientPink"
    },
    {
      title: "LeetCode Problem Solver",
      description: "Completed over 300 challenging problems on LeetCode, honing algorithmic skills.",
      icon: "💡",
      gradient: "gradientOrange"
    },
    {
      title: "Social Media Influencer",
      description: "Established a significant online presence and following on social media platforms.",
      icon: "📱",
      gradient: "gradientViolet"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % achievements.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, achievements.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % achievements.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const getVisibleAchievements = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + achievements.length) % achievements.length;
      visible.push({
        ...achievements[index],
        position: i,
        index: index
      });
    }
    return visible;
  };

  return (
    <section className={styles.achievementsSection} id="achievements">
      <div className={styles.achievementsContainer}>
        {/* Section Header */}
        <div className={styles.headerSection}>
          <h2 className={styles.sectionTitle}>
            🏆 Achievements
          </h2>
          <p className={styles.sectionSubtitle}>
            A journey of excellence, innovation, and continuous growth
          </p>
        </div>

        {/* Main Carousel Container */}
        <div className={styles.carouselContainer}>
          {/* Carousel Track */}
          <div className={styles.carouselTrack}>
            {getVisibleAchievements().map((achievement, idx) => {
              const { position } = achievement;
              const isCenter = position === 0;
              const isAdjacent = Math.abs(position) === 1;

              return (
                <div
                  key={achievement.index}
                  className={`${styles.achievementCard} ${
                    isCenter
                      ? styles.centerCard
                      : isAdjacent
                      ? styles.adjacentCard
                      : styles.edgeCard
                  }`}
                  style={{
                    transform: `
                      translateX(${position * 280}px) 
                      translateZ(${isCenter ? '0px' : '-100px'}) 
                      rotateY(${position * -15}deg)
                      scale(${isCenter ? 1.1 : isAdjacent ? 0.95 : 0.75})
                    `,
                    filter: isCenter ? 'none' : 'blur(1px)'
                  }}
                  onClick={() => goToSlide(achievement.index)}
                >
                  <div className={`${styles.cardWrapper} ${styles[achievement.gradient]}`}>
                    <div className={styles.cardContent}>
                      {/* Animated background pattern */}
                      <div className={styles.cardBackground} />
                      
                      {/* Icon */}
                      <div className={`${styles.achievementIcon} ${isCenter ? styles.bounceIcon : ''}`}>
                        {achievement.icon}
                      </div>
                      
                      {/* Title */}
                      <h3 className={styles.achievementTitle}>
                        {achievement.title}
                      </h3>
                      
                      {/* Description */}
                      <p className={styles.achievementDescription}>
                        {achievement.description}
                      </p>

                      {/* Shine effect for center card */}
                      {isCenter && (
                        <div className={styles.shineEffect} />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className={`${styles.navButton} ${styles.prevButton}`}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <svg className={styles.navIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className={`${styles.navButton} ${styles.nextButton}`}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <svg className={styles.navIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className={styles.dotsContainer}>
          {achievements.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`${styles.dot} ${
                index === currentIndex ? styles.activeDot : ''
              }`}
            />
          ))}
        </div>

        {/* Play/Pause Button */}
        <div className={styles.controlsContainer}>
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={styles.playPauseButton}
          >
            {isAutoPlaying ? (
              <>
                <svg className={styles.controlIcon} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
                <span className={styles.controlText}>Pause</span>
              </>
            ) : (
              <>
                <svg className={styles.controlIcon} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <span className={styles.controlText}>Play</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}

export default Achievements;