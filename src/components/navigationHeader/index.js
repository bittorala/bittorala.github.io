import React from 'react';
import { motion } from 'framer-motion';
import Link from '@docusaurus/Link';
import styles from './index.module.css';
import { GithubIcon, Linkedin } from 'lucide-react';

export default function Navigation() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.nav}
    >
      <div className={styles.container}>
        <Link to="/" className={styles.logo}>
          Home
        </Link>
        
        <div className={styles.links}>
          {/* <Link to="/blog" className={styles.link}>
            Blog
          </Link> */}
          
          <a 
            href="https://github.com/bittorala" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.iconLink}
          >
            <GithubIcon size={24} />
          </a>
          
          <a 
            href="https://linkedin.com/in/bittor-alana" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.iconLink}
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}