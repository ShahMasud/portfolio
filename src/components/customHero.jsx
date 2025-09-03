import React, { Fragment } from "react";
import { motion } from "framer-motion";
import "./customHero.css"
import profileImage from '../assets/me.jpg';
import profileImage2 from '../assets/skills.png';


const LinkBtn = ({ text }) => {
  return (
     <motion.a
      href="/shahmasood-frontend-engineer.pdf" // Place your resume file in the public folder
      download="Shah_Masood_Frontend_Engineer.pdf"
      className="btn-link btn-primary"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      Get my Resume
    </motion.a>
  );
};

const CustomHero = () => {
  return (
    <Fragment>
        <div className="hero-section">
      <div className="text-holder">
        <div className="inner-text">
          <motion.h2
            className="page-title"
            initial={{ y: 100, x: 50, opacity: 0, scale: 0 }}
            animate={{ y: 0, x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            Hi, I’m Shah Masood — <span className="role">Frontend Engineer.</span> 
          </motion.h2>
          <motion.p
            className="page-paragraph"
            initial={{ y: 100, x: 50, opacity: 0, scale: 0 }}
            animate={{ y: 0, x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8, type: "tween" }}
          >
            I build modern, scalable, and user-friendly web applications, seamlessly integrating backend APIs and AI-powered features.
          </motion.p>
        </div>
        <div className="link-btn-div">
          <LinkBtn text="Learn more" />
        </div>
      </div>
      <figure className="pic-holder">
        <motion.img
          src={profileImage2}
          className="pic"
          alt="skills"
        />
        <motion.img
          src={profileImage}

          className="pic"
          alt="skills"
          animate={{ x: -500 }}
          transition={{ duration: 1, delay: 1.8, type: "tween" }}
        />
      </figure>
      </div>
    </Fragment>
  );
};

export default CustomHero;
