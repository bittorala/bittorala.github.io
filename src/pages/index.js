import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/navigationHeader/index';
import styles from './index.module.css';

const ProjectCard = ({ title, description, tags, href }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className={styles.card}
  >
    <a href={href} className={styles.cardLink}>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={styles.tagContainer}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </a>
  </motion.div>
);

const Section = ({ title, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={styles.section}
  >
    <h2>{title}</h2>
    {children}
  </motion.section>
);

export default function HomePage() {
  const projects = [
    {
      title: "StringENT",
      description: "A modified version of ENT, as a benchmark to assess non-randomness qualities of PRNGs with a blazingly fast set of tests that probe for statistical weaknesses",
      tags: ["Cryptography", "Security", "Randomness"],
      href: "https://github.com/bittorala/stringent"
    },
    {
      title: "EASTLite",
      description: "A lightweight Scene Text Detector based on EAST and MobileNets for ultra-fast text detection",
      tags: ["Computer Vision", "AI", "Efficiency"],
      href: "https://github.com/bittorala/east_lite"
    }
  ];

const papers = [
  {
      title: "StringENT test suite: ENT battery revisited for efficient P value computation",
      description: "Journal of Cryptographic Engineering",
      tags: ["Cryptography", "Randomness"],
      href: "http://dx.doi.org/10.1007/s13389-023-00313-5"
  },
  {
      title: "Further analysis of the statistical independence of the NIST SP 800-22 randomness tests",
      description: "Applied Mathematics and Computation",
      tags: ["Cryptography", "Randomness", "NIST"],
      href: "https://doi.org/10.1016/j.amc.2023.128222"
  }];


  return (
    <>
    <Navigation />
    <div className={styles.container}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className={styles.header}
      >
        <h1>Bittor Alaña - Software Architect</h1>
        <p className={styles.intro}>
          I love problem solving, figuring out efficient, smart and simple ways of tackling real-world problems. 
          As a Mathematics and Computer Science graduate, I am an enthusiast of tech as a driver for humankind's 
          prosperity and advancement.
        </p>
        <p className={styles.description}>
          As a Software Architect at Kurago, I help develop a Smart Factory solution that enables Bystronic's 
          customers to integrate their industrial processes end to end.
        </p>
        <p className={styles.description}>
          We have an extensive cloud experience, focusing mainly on Azure to develop SaaS offerings, and also 
          develop very powerful on-premise solutions for our most privacy-oriented customers. My tech stack is 
          mainly comprised of C#, Python, SQL and Typescript.
        </p>
      </motion.div>

      <Section title="Projects">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </Section>

      <Section title="Research Papers">
        {papers.map((paper, index) => (
          <ProjectCard key={index} {...paper} />
        ))}
      </Section>
    </div></>
  );
}