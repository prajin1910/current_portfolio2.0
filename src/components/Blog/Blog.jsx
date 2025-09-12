import React, { useState, useRef } from "react";
import styles from "./Blog.module.css";
import { ChevronDown, ChevronUp, X } from "lucide-react";
import smartWasteImage from "/assets/contact/problem.png";
import busTrackingImage from "/assets/contact/business.png";
import iotTemperatureImage from "/assets/contact/python.png";
import uiUxPracticesImage from "/assets/contact/iot.png";
import industryImage from "/assets/contact/digital.png";
import basicsImage from "/assets/contact/basics.png";
import udemyImage from "/assets/contact/udemy.png";
import mongoImage from "/assets/contact/mongo.png";
import netImage from "/assets/contact/net.png";
import netbasicsImage from "/assets/contact/netbasics.png";
import aws1Image from "/assets/contact/aws1.png";
import innothon from "/assets/achievements/innothon.png";
import social from "/assets/achievements/social.png";
import nexus from "/assets/achievements/nexus.png";
import hack from "/assets/achievements/hack.png";
import ninja from "/assets/achievements/ninja.png";
import board from "/assets/achievements/board.png";
import google from "/assets/achievements/google.png";
import ieee from "/assets/achievements/IEEE.jpeg";
import tera from "/assets/achievements/tera.png";
import coding from "/assets/achievements/coding.png";
import java from "/assets/achievements/java.png";
import fullstack from "/assets/achievements/fullstack.png";
import python from "/assets/achievements/python.png";
import c from "/assets/achievements/c.png";
import database from "/assets/achievements/database.png";
import deep from "/assets/achievements/deep.png";
import gdg from "/assets/achievements/gdg.png";
import geeks from "/assets/achievements/geeks.png";
import hacker from "/assets/achievements/hacker.png";
import iei from "/assets/achievements/iei.png";

function BlogImageModal({ image, title, onClose }) {
  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div 
        className={styles.modalContent} 
        onClick={(e) => e.stopPropagation()}
      >
        <button className={styles.modalCloseButton} onClick={onClose}>
          <X size={24} />
        </button>
        <img 
          src={image} 
          alt={title} 
          className={styles.modalImage}
        />
      </div>
    </div>
  );
}

function Blog() {
  const [showAllBlogs, setShowAllBlogs] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const blogSectionRef = useRef(null);
  const initialBlogsCount = 4;

  const blogs = [
    {
      title: "Problem Solving Using Computational Thinking",
      image: smartWasteImage,
      description: "@ University of Michigan",
      tags: ["Programming Languages", "AIML", "Logical Reasoning"],
      date: "May 2024"
    },
    {
      title: "160 Days of DSA",
      image: geeks,
      description: "@ geeksforgeeks",
      tags: ["Problem Solving","challenges","DSA","Problem Solving"],
      date: "April 2025"
    },
    {
      title: "Business Analysis & Process Management",
      image: busTrackingImage,
      description: "@ Coursera Network",
      tags: ["Business Analytics", "Real-Time", "Management Process", "Marketing"],
      date: "September 2024"
    },
    {
      title: "Problem Solving",
      image: hacker,
      description: "@ HackerRank",
      tags: ["Problem Solving","Java","DSA","Problem Solving","Strategies"],
      date: "September 2025"
    },
    {
      title: "Build a User Interface using Python Language",
      image: iotTemperatureImage,
      description: "@ Coursera Network",
      tags: ["Python", "UIUX", "Django", "NumPy", "Pandas"],
      date: "March 2024"
    },
    {
      title: "IoT Wireless & Cloud Computing Emerging Technologies",
      image: uiUxPracticesImage,
      description: "@ Yonsei University",
      tags: ["IoT", "Sensors","Node MCU's", "Cloud Technologies"],
      date: "March 2024"
    },
    {
      title: "AWS Academy Introduction to Cloud Semester 2",
      image: aws1Image,
      description: "@ AWS Academy",
      tags: ["DataBase","Cloud Computing","SaaS", "PaaS","IaaS"],
      date: "September 2024"
    },
    {
      title: "Digital 101 - ITeS Sector Skills Council",
      image: industryImage,
      description: "@ Nasscom",
      tags: ["IT-ITeS Sector", "Ministry","Technologies", "IT Industries"],
      date: "June 2024"
    },
    {
      title: "Quantitative Aptitude Basics",
      image: basicsImage,
      description: "@ Great Learning",
      tags: ["Aptitude", "Logical Reasoning","Analysis", "Arithmetics"],
      date: "September 2024"
    },
    {
      title: "AWS Academy Introduction to Cloud Semester 1",
      image: aws1Image,
      description: "@ AWS Academy",
      tags: ["DataBase","Cloud Computing","SaaS", "PaaS","IaaS"],
      date: "September 2024"
    },
    {
      title: "GRE Quantitative Prep Master Math Course",
      image: udemyImage,
      description: "@ Udemy",
      tags: ["Math", "Arithmetics","Correlation", "Algebra"],
      date: "January 2024"
    },
    {
      title: "Introduction to MongoDB",
      image: mongoImage,
      description: "@ MongoDB",
      tags: ["Cluster", "Tools","Queries", "Relational DB","Atlas"],
      date: "July 2024"
    },
    {
      title: "Linux Unhatched Course",
      image: netImage,
      description: "@ Cisco Networking Academy",
      tags: ["Networking Basics", "Linux","Unix", "Cloud","Security"],
      date: "September 2024"
    },
    {
      title: "Networking Basics",
      image: netbasicsImage,
      description: "@ Cisco Networking Academy",
      tags: ["Networking Basics", "Tools","Cloud", "Router Config","Security"],
      date: "November 2024"
    },
    {
      title: "Innothon - 24 Hours Hackathon",
      image: innothon,
      description: "@  St.Joseph's Institute of Technology",
      tags: ["Problem Solving","Configurations"],
      date: "October 2024"
    },
    {
      title: "Content Creator",
      image: social,
      description: "@ Instagram (META)",
      tags: ["Content Creation","Marketing"],
      date: "August 2023"
    },
    {
      title: "Project Expo",
      image: nexus,
      description: "@ St.Joseph's Institute of Technology",
      tags: ["Experience","Problem Solving"],
      date: "May 2024"
    },
    {
      title: "IEEE Project Event",
      image: ieee,
      description: "@ IEEE CS Theme ",
      tags: ["IT Industry","Figma","Designing","UIUX"],
      date: "November 2024"
    },
    {
      title: "Coding Ninja",
      image: ninja,
      description: "@ Naukri - Coding Ninja",
      tags: ["Coding","Consistency","Problem Solving","Rewards"],
      date: "January 2025"
    },
    {
      title: "Data Science Course",
      image: board,
      description: "@ Board Infinity",
      tags: ["Data Analytics","Regression Models","Tools","DataSets"],
      date: "August 2024"
    },
    {
      title: "Hack-O-Mania - 24 Hours Hackathon",
      image: hack,
      description: "@ St.Joseph's College of Engineering",
      tags: ["Web Development","Challenge"],
      date: "August 2024"
    },
    {
      title: "Cloud Computing & AWS",
      image: tera,
      description: "@ Igniters ",
      tags: ["Cloud","Technologies","Tools","DevOps"],
      date: "August 2024"
    },
    {
      title: "Google Analytics Course",
      image: google,
      description: "@ Google Analytics Academy ",
      tags: ["Digital Marketing","Analytics","Tools","Server"],
      date: "May 2024"
    },
    {
      title: "Coding Basics - Beginners",
      image: coding,
      description: "@ Infosys Springboard ",
      tags: ["Problem Solving","Approach","Thinking","TimeSpace"],
      date: "March 2024"
    },
    {
      title: "Java Programming Fundamentals",
      image: java,
      description: "@ Infosys Springboard ",
      tags: ["Problem Solving","Approach","Thinking","TimeSpace"],
      date: "March 2024"
    },
    {
      title: "Deep Blue Hackathon",
      image: deep,
      description: "@ Mastek Comapny ",
      tags: ["MongoDB","SQL","Competition","EJS"],
      date: "March 2025"
    },
    {
      title: "Full Stack Development",
      image: fullstack,
      description: "@ Infosys Springboard ",
      tags: ["Tools","FrontEnd","BackEnd","Database"],
      date: "April 2024"
    },
    {
      title: "Python Programming",
      image: python,
      description: "@ Infosys Springboard ",
      tags: ["Tools","Functions","Methods","Working Principles"],
      date: "January 2024"
    },
    {
      title: "C Programming",
      image: c,
      description: "@ Infosys Springboard ",
      tags: ["Logics","Functions","Methods","Syntax"],
      date: "March 2024"
    },
    {
      title: "GDG Hackathon",
      image: gdg,
      description: "@ Google Developer Group",
      tags: ["Problem Solving","challenges","Time Management","Collaboration"],
      date: "March 2025"
    },
    {
      title: "DataBase Management Systems",
      image: database,
      description: "@ Infosys Springboard ",
      tags: ["MongoDB","SQL","Relations","Methods"],
      date: "March 2024"
    },
    {
      title: "IEI Student Membership",
      image: iei,
      description: "@ Institution of Engineers",
      tags: ["Membership","Engineering","Mentorship","Networking"],
      date: "June 2025"
    }
  ];

  const hasMoreBlogs = blogs.length > initialBlogsCount;

  const toggleBlogs = () => {
  if (showAllBlogs) {
    // Scroll to the blog section before collapsing
    blogSectionRef.current?.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start'
    });
    // Wait for the scroll to complete before collapsing
    setTimeout(() => {
      setShowAllBlogs(false);
    }, 500); // Matches the scroll duration
  } else {
    setShowAllBlogs(true);
  }
};

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="blogs" className={styles.blogSection} ref={blogSectionRef}>
      <div className={styles.blogContainer}>
        <h2 className={styles.sectionTitle}>📝 Certifications</h2>
        <div className={styles.blogGrid}>
          {/* Always show first 4 blogs */}
          {blogs.slice(0, initialBlogsCount).map((blog, index) => (
            <div 
              key={index} 
              className={styles.blogCard}
            >
              <div 
                className={styles.blogImageContainer} 
                onClick={() => openImageModal(blog.image)}
              >
                <img src={blog.image} alt={blog.title} className={styles.blogImage} />
                <div className={styles.blogDate}>{blog.date}</div>
              </div>
              <div className={styles.blogContent}>
                <h3 className={styles.blogTitle}>{blog.title}</h3>
                <p className={styles.blogDescription}>{blog.description}</p>
                <div className={styles.blogTags}>
                  {blog.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.blogTag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          {/* Animated container for additional blogs */}
          <div className={`${styles.additionalBlogs} ${showAllBlogs ? styles.expanded : styles.collapsed}`}>
            {blogs.slice(initialBlogsCount).map((blog, index) => (
              <div 
                key={index + initialBlogsCount} 
                className={styles.blogCard}
              >
                <div 
                  className={styles.blogImageContainer} 
                  onClick={() => openImageModal(blog.image)}
                >
                  <img src={blog.image} alt={blog.title} className={styles.blogImage} />
                  <div className={styles.blogDate}>{blog.date}</div>
                </div>
                <div className={styles.blogContent}>
                  <h3 className={styles.blogTitle}>{blog.title}</h3>
                  <p className={styles.blogDescription}>{blog.description}</p>
                  <div className={styles.blogTags}>
                    {blog.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className={styles.blogTag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {hasMoreBlogs && (
          <div className={styles.toggleButtonContainer}>
            <button 
              onClick={toggleBlogs} 
              className={styles.toggleButton}
            >
              {showAllBlogs ? (
                <>
                  Show Less <ChevronUp size={20} />
                </>
              ) : (
                <>
                  Show More ({blogs.length - initialBlogsCount} more) <ChevronDown size={20} />
                </>
              )}
            </button>
          </div>
        )}
        
        {/* Image Modal */}
        {selectedImage && (
          <BlogImageModal 
            image={selectedImage} 
            title="Blog Image"
            onClose={closeImageModal} 
          />
        )}
      </div>
    </section>
  );
}

export default Blog;