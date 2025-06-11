import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/navigationHeader/index';
import styles from './index.module.css';

const ProjectCard = ({ title, description, tags, href }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    className={styles.card}
  >
    <a href={href} className={styles.cardLink} target="_blank">
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
        <div className={styles.header}>
          <h1>Bittor Alaña - Software Architect</h1>
          <div className={styles.imgHolder}>
            <img src="/img/bittor.jpeg" alt="Bittor Alaña at Icod de los Vinos (beautiful town btw)" />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className={styles.header}
        >
          <p className={styles.intro}>
            I am Bittor Alaña Olivares, a Software Architect from Bilbao, Basque Country. I hold joint
            Bachelor's degrees Mathematics and Computer Science from Universidad Complutense de Madrid,
            as well as an MSc in Computational Engineering and Mathematics from Universitat Rovira i Virgili.
            When I'm not doing software, AI or maths, I enjoy hiking, reading, cooking and kickboxing.
          </p>
          <p className={styles.description}>
            I have been working at Bystronic Software (formerly Kurago Software) since 2020. I started off
            as a Software Engineer, had a short tenure as Scrum Master, and have been a Software Architect
            in its Technology Office ever since.
          </p>
          <p className={styles.description}>
            At Bystronic Software, we develop a comprehensive software ecosystem that drives Bystronic's
            Smart Factory. We combine Azure-based SaaS products with on-premise software running at the lowest
            level, for a simplified and integrated workflow that helps digitalize sheet metal manufacturing.
            My tech stack mainly consists of (but is not limited to) C#, Python, SQL and Typescript.
          </p>
          <p className={styles.description}>
            My research interests include <strong>Deep Learning</strong> and <strong>Cryptography</strong>.
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