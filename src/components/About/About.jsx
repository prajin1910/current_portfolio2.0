import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Multi - Domain Developer</h3>
              <p>
              I've Skilled in creating high-performance apps, Websites with clean architecture and seamless integrations.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cloud.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Cloud Architect</h3>
              <p>
              I design scalable, secure cloud infrastructures, optimizing deployment, performance, and cost efficiency.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};