import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Projects from "../components/projects";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--shadow", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}></div>
      </div>
    </header>
  );
}

function HeroSection(props) {
  return (
    <section
      className={clsx("hero hero--primary hero-section", {
        [styles.primaryHero]: props.parity,
        [styles.secondaryHero]: !props.parity,
      })}
    >
      <div
        className={clsx("container", {
          [styles.reverseFlex]: props.parity,
        })}
      >
        <p className={clsx(styles.heroText)}>{props.text}</p>
        <img src={props.url} />
      </div>
    </section>
  );
}

const firstText = `I love problem solving, figuring out efficient,
smart and simple ways of tackling issues. As a Mathematics and Computer
Science graduate, I am an enthusiast of tech as a driver for humankind's 
prosperity and advancement.`;

const secondText = `As a Software Architect at Kurago, I help develop a
Smart Factory solution that enables Bystronic's customers to integrate
their industrial processes end to end.`;

const thirdText = `We have an extensive cloud experience, focusing mainly on
Azure to develop SaaS offerings, and also develop very powerful on-premise
solutions for our most privacy-oriented customers. My tech stack is mainly
comprised of C#, Python, SQL and Typescript.`;

export default function Home() {
  return (
    <Layout title="Home" description="" style={styles}>
      <HomepageHeader />
      <main style={styles.main}>
        <HeroSection
          parity={true}
          text={firstText}
          url="/img/undraw_engineering_team_a7n2.svg"
        />
        <HeroSection
          parity={false}
          text={secondText}
          url="/img/undraw_projections.svg"
        />
        <HeroSection
          styling={styles.secondaryHero}
          parity={true}
          text={thirdText}
          url="/img/undraw_cloud_hosting_7xb1.svg"
        />
        <Projects />
      </main>
    </Layout>
  );
}
