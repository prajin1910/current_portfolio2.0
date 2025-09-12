import React, { useState, useRef } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const initialProjectsCount = 2;
  const projectsRef = useRef(null);
  const containerRef = useRef(null);

  const hasMoreProjects = projects.length > initialProjectsCount;

  const toggleShowMore = () => {
    if (!showAll) {
      // When showing more, just update state
      setShowAll(true);
    } else {
      // When showing less, first scroll to top then collapse
      containerRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Wait for scroll to complete before collapsing
      setTimeout(() => {
        setShowAll(false);
      }, 500); // Matches the scroll duration
    }
  };

  return (
    <section className={styles.container} id="projects" ref={containerRef}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects} ref={projectsRef}>
        {/* Always show first 2 projects */}
        {projects.slice(0, initialProjectsCount).map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
        
        {/* Additional projects */}
        <div className={`${styles.additionalProjects} ${showAll ? styles.expanded : styles.collapsed}`}>
          {projects.slice(initialProjectsCount).map((project, id) => {
            return <ProjectCard key={id + initialProjectsCount} project={project} />;
          })}
        </div>
      </div>
      
      {hasMoreProjects && (
        <div className={styles.showMoreContainer}>
          <button 
            className={styles.showMoreButton} 
            onClick={toggleShowMore}
          >
            {showAll ? "Show Less" : `Show More (${projects.length - initialProjectsCount} more)`}
          </button>
        </div>
      )}
    </section>
  );
};