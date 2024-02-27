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
              href={props.repo}
              className={clsx("button-link", styles.repoButton)}
              target="_blank"
              rel="noopener noreferrer"
            >
              See repo
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

export default function Projects() {
  return (
    <div class="hero" style={{ alignItems: 'stretch' }}>
      {projects.map((project) => (
        <Project {...project} />
      ))}
    </div>
  );
}
