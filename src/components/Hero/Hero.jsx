import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import { FiDownload } from "react-icons/fi"; // using react-icons

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Prajin Kumar P</h1>
        <ul className={styles.description}>
          <li>I'm a motivated Computer Science and Engineering student at St. Joseph's Institute of Technology with a CGPA of 9.12.</li>
          <li>Founder of TechBridge Innovations Pvt. Ltd., dedicated to bridging the gap between technology and real-world challenges.</li>
          <li>Proven skills in cloud computing, Android development, web technologies, and technical team leadership.</li>
          <li>Winner of competitive programming events and finalist for prestigious hackathons.</li>
          <li>Committed to creating impactful solutions while continuously learning and growing in the tech space.</li>
        </ul>
        
        <a href="/prajin.pdf" target="_blank" className={styles.contactBtn}>
          Resume <FiDownload style={{ marginLeft: "8px" }} />
        </a>
        
      </div>
      <img
        src={getImageUrl("hero/prajin.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
