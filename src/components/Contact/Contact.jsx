import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
        <p className={styles.phoneNumber}>+91 9025469369</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:prajinkumar2020@gmail.com">prajinkumar2020@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/prajinkumar19/">linkedin.com/prajinkumar19/</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/prajin1910">github.com/prajin1910</a>
        </li>
        <li className={styles.link}>
          <img className={styles.leetcode} src={getImageUrl("contact/leetcode.png")} alt="Leetcode icon" />
          <a href="https://leetcode.com/u/prajin_kumar/">leetcode.com/u/prajin_kumar/</a>
        </li>
      </ul>
    </footer>
  );
};
