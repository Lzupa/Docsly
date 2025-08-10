import styles from "./Technologies.module.scss";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Technologies: React.FC = () => {
  const randomText =
    "Integer eget nisl nisi. Maecenas porta sodales felis, sit amet tincidunt urna pulvinar nec. Vivamus imperdiet ligula id nisl efficitur, vitae euismod massa egestas. Aenean in suscipit libero. Vestibulum ullamcorper ante sed fringilla eleifend. Curabitur in diam vitae est scelerisque egestas molestie non sem.";
  return (
    <div className={styles.Technologies}>
      <h1 className="title" style={{ marginBottom: "5rem" }}>
        Technologies we use
      </h1>
      <section className={styles.CardWrapper}>
        <Card
          link="/react.svg" // placeholder image for WordPress
          title="WordPress"
          text="The world’s most popular CMS for building flexible, easy-to-manage websites for any business or individual."
        />
        <Card
          link="/next.svg" // placeholder image for Figma
          title="Figma"
          text="A collaborative design tool for creating stunning user interfaces and prototypes, ensuring your ideas look great before development."
        />
        <Card
          link="/jsHtmlCss.svg"
          title="JavaScript, HTML & CSS"
          text="The core technologies for creating dynamic, responsive, and visually appealing websites."
        />
        <Card
          link="/react.svg"
          title="React"
          text="A powerful JavaScript library for building fast, interactive user interfaces for web and mobile apps."
        />
        <Card
          link="/next.svg"
          title="Next.js"
          text="A modern framework for building scalable, SEO-friendly websites and web applications with React."
        />
        <Card
          link="/android.svg"
          title="Android"
          text="Native development for Android devices, delivering high-performance mobile experiences."
        />
        <Card
          link="/flutter.svg"
          title="Flutter"
          text="Google’s toolkit for building beautiful, cross-platform mobile apps from a single codebase."
        />
        <Card
          link="/backend.svg"
          title="Node.js, PHP & .NET"
          text="Robust backend solutions for your apps and websites, using reliable and scalable server technologies."
        />
      </section>
    </div>
  );
};

export default Technologies;

const Card: React.FC<{ title: string; link: string; text: string }> = ({ title, link, text }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });
  return (
    <motion.div animate={inView ? { opacity: 1 } : {}} className={styles.Card} ref={ref}>
      <section className={styles.ImgWrapper}>
        <Image alt="" src={link} layout="fill" objectFit="contain" />
      </section>
      <h2>{title}</h2>
      <p>{text}</p>
    </motion.div>
  );
};
