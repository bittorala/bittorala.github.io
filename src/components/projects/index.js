import React from "react";
import styles from "./index.module.css";
import clsx from "clsx";

function Project(props) {
  return (
    <div
      class="project-card"
      style={{ flex: 1, minHeight: "100%", padding: "1rem" }}
    >
      <div class="card" style={{ minHeight: "inherit" }}>
        <div class="card__header">
          <h3>{props.name}</h3>
        </div>
        <div class="card__body">
          <p>{props.description}</p>
          <p>
            {props.keywords.map((kw) => (
              <span class="badge badge--info">{kw}</span>
            ))}
          </p>
        </div>
        <div class="card__footer">
          <button class="button button--secondary button--block">
            <a
              href={props.repo ?? props.doi}
              className={clsx("button-link", styles.repoButton)}
              target="_blank"
              rel="noopener noreferrer"
            >
              { !!props.repo ? "See repo" : "See DOI" }
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

const projects = [
  {
    name: "EASTLite",
    description: `A lightweight Scene Text Detector based on EAST
        and MobileNets for ultra-fast text detection`,
    keywords: ["Computer Vision", "AI", "Efficiency"],
    repo: "https://github.com/bittorala/east_lite",
  },
  {
    name: "StringENT",
    description: `A modified version of ENT, as a benchmark to
        assess non-randomness qualities of PRNGs with a blazingly
        fast set of tests that probe for statistical weaknesses`,
    keywords: ["Cryptography", "Security", "Randomness"],
    repo: "https://github.com/bittorala/StringENT",
  },
];

const papers = [
    {
        name: "StringENT test suite: ENT battery revisited for efficient P value computation",
        description: "Journal of Cryptographic Engineering",
        keywords: ["Cryptography", "Randomness"],
        doi: "http://dx.doi.org/10.1007/s13389-023-00313-5"
    },
    {
        name: "Further analysis of the statistical independence of the NIST SP 800-22 randomness tests",
        description: "Applied Mathematics and Computation",
        keywords: ["Cryptography", "Randomness", "NIST"],
        doi: "https://doi.org/10.1016/j.amc.2023.128222"
    }];


export default function Projects() {
  return (
    <section>
      <h2>Projects</h2>
      <div className={clsx("hero", styles.hero)}>
        {projects.map((project) => (
          <Project {...project} />
        ))}
      </div>
      <h2>Research papers</h2>
      <div className={clsx("hero", styles.hero)}>
        {papers.map((paper) => (
          <Project {...paper} />
        ))}
      </div>
    </section>
  );
}
