import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import indexStyles from "./../styles/index.module.scss";
import styles from "../styles/Home.module.css";
import HomeStyles from "../styles/HomeStyles.module.scss";
import MainNavBar from "../Components/NavBar/MainNavBar";
import OurOffer from "../Components/Home/OurOffer";
import IzradaWeb from "../Components/Home/IzradaWeb";
import DigitalSolution from "../Components/Home/DigitalSoluton";
import WhyUs from "../Components/Home/WhyUs";
import Technologies from "../Components/Home/Technologies";
import { ContactFrom } from "../Components/SharedFolder/ContactForm";
import ContactFormRetro from "../Components/SharedFolder/ContactFormRetro";

const home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Docsly</title>
        <meta name="description" content="Website creators netherlands" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainNavBar Selected={"Home"} />
      <main className={styles.main}>
        <div className={HomeStyles.title}>Building with Passion and Precision</div>
        <article className={HomeStyles.article}>
          <section style={{ width: "100%", height: "100%", minHeight: 350, position: "relative" }}>
            <Image alt="web dev quality" priority={true} src="/Quality.svg" layout="fill" objectFit="contain" objectPosition="center" />
          </section>
          <div className={HomeStyles.p}>
            <span style={{ display: "block", margin: "2rem 0" }}>
              Docsly helps startups and individuals launch their digital ideas with affordable, high-quality websites and apps. 
              We work with any technology stack: WordPress, Next.js, React, and more - so you get a solution that fits your needs and budget.
              <br /><br />
              Whether you need a simple website, a custom web app, or a mobile application for your business or the public, our team delivers fast, reliable results. 
              We also offer ongoing support and maintenance to keep your digital products running smoothly.
            </span>
            <div className="buttonFill reverse" style={{ borderColor: "black", color: "black" }}>
              Learn more
              <div className="hiddenWave" style={{ backgroundColor: "black" }}></div>
            </div>
          </div>
        </article>
        <OurOffer />
        <IzradaWeb title="Launch Your Online Presence" text="At Docsly, we build websites that help you launch your business and reach new customers.  
          Whether you need a simple landing page or a custom site with advanced features, we work with any technology stack: WordPress, Next.js, React, and more.  
          Our process is fast, affordable, and tailored to your needs, so you get a website that looks great and works perfectly for your goals."/>
        <DigitalSolution />
        <IzradaWeb title="Apps That Grow With You" text="Docsly develops mobile and web applications that help your business grow and adapt. Whether you need an internal tool to streamline your workflow or a public app for your customers, we deliver solutions that are reliable, user-friendly, and built for any platform: iOS, Android, or the web. Our flexible approach means you get the right technology for your project, delivered quickly and affordably." reverse={true} />
        <WhyUs />
        <Technologies />
        <ContactFormRetro title="You have a question? We will get back as fast as we can!" />
      </main>

      <footer className=""></footer>
    </div>
  );
};

export default home;
