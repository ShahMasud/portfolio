import React from 'react';
import { motion } from 'framer-motion';
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import email from "../assets/email.jpeg"

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="footer">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left">
              © {currentYear} Shah Masood. All rights reserved.
            </p>
          </div>
          
          <div className="footer-socials">
            <a
              href="mailto:shahmasood.dev@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
             {/* <img
                   src={email}
                   alt="email logo"
                   style={{width:"auto", height:"60px"}}
                 /> */}
                 <MdOutlineEmail/>
            </a>
            
            <a
              href="http://www.linkedin.com/in/shah-masood"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
            >
              {/* <img
                   src={linkedin}
                   alt="linkedin logo"
                   style={{width:"auto", height:"60px"}}
                 /> */}
                 <FaLinkedin/>
            </a>
            
            <a
              href="https://github.com/ShahMasud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
           {/* <img
                   src={github}
                   alt="github logo"
                   style={{width:"auto", height:"60px"}}
                 /> */}
                 <FaGithub/>
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
