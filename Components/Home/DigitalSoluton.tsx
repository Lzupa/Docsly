import styles from "./DigitalSolution.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faChartLine, faShieldAlt } from "@fortawesome/free-solid-svg-icons";

const DigitalSolution: React.FC = () => {
  return (
    <div className={styles.DigitalSolution}>
      <h1 className="title">Unlock Your Potential with Custom Digital Solutions</h1>
      <section className={styles.CardWrapper}>
        <Card
          icon={faChartLine}
          title="Grow with Data"
          text="Track your progress and make smarter decisions with custom dashboards and analytics tools built for your business."
        />
        <Card
          icon={faCalendarCheck}
          title="Work Efficiently"
          text="Automate tasks and manage your workflow with digital solutions designed to save you time and keep your team organized."
        />
        <Card
          icon={faShieldAlt}
          title="Stay Secure"
          text="Protect your data and your customers with reliable, secure technology and ongoing support from Docsly."
        />
      </section>
    </div>
  );
};

const Card: React.FC<{ icon: any; title: string; text: string }> = ({ icon, title, text }) => {
  return (
    <article className={styles.Article}>
      <div className={styles.CircleWrapper}>
        <FontAwesomeIcon icon={icon} />
      </div>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
};

export default DigitalSolution;
