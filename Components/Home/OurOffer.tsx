import styles from "./OurOffer.module.scss";
import Image from "next/image";
import InView, { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { motion } from "framer-motion";

const OurOffer: React.FC = () => {
  return (
    <div className={styles.OurOffer}>
      <h1 className="title">What Docsly Offers</h1>
      <section style={{ display: "flex" }}>
        <ul className={styles.ul}>
          <Item
            link="/design.svg"
            title="Web Design"
            text="Modern designs that make your business stand out and connect with your audience."
          />
          <Item
            link="/website.svg"
            title="Websites"
            text="Custom websites built with WordPress, React, or any stack you prefer. Tailored to your needs."
          />
          <Item
            link="/app.svg"
            title="Web Applications"
            text="Web apps that streamline your business and engage your users."
          />
          <Item
            link="/mobApp.svg"
            title="Mobile Applications"
            text="Mobile apps for any purpose: internal business tools or public apps on iOS and Android."
          />
          <Item
            link="/solution.svg"
            title="Digital Solutions for Companies"
            text="Need something unique? We deliver custom digital solutions to help your business grow and operate efficiently."
          />
        </ul>
        <section className={styles.PhoneMockUp} style={{ height: "800px", width: "500px", position: "relative", borderRadius: "1rem" }}>
          <Image alt="" src="/iphone.png" layout="fill" objectFit="contain" />
        </section>
      </section>
    </div>
  );
};

const Item: React.FC<any> = (props: any) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true,
  });

  return (
    <motion.li
      transition={{ duration: 0.2, bounce: 0 }}
      animate={inView ? { opacity: 1, y: 0 } : { y: "100%" }}
      ref={ref}
      style={{ opacity: 0 }}
      className={styles.li}
    >
      <section>
        <h2>{props.title}</h2>
        <p style={{ fontWeight: 100 }}>{props.text}</p>
      </section>
      <section className={styles.ImgWrapper}>
        <section style={{ width: 100, height: 100, borderRadius: "50%", position: "relative" }}>
          <Image alt="" src={props.link} layout="fill" objectFit="contain" />
        </section>
      </section>
    </motion.li>
  );
};

export default OurOffer;
