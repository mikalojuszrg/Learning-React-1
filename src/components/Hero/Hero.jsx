import Button from "../Button/Button";
import styles from "./Hero.module.scss";

const Hero = ({ title, description }) => {
  return (
    <header className={styles.hero}>
      <h1 className={styles.hero__title}>{title}</h1>
      <p className={styles.hero__description}>{description}</p>
      <Button>Button</Button>
    </header>
  );
};

export default Hero;
