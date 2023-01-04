import styles from "./MainSection.module.scss";
import data from "../../data.js";
import Card from "../Card/Card";

const MainSection = ({ title, description }) => {
  const cards = data.map((card) => {
    return <Card {...card} />;
  });
  return (
    <main className={styles["main-content"]}>
      <div className={styles["main-content__header"]}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <section className={styles["main-content__section"]}>{cards}</section>
    </main>
  );
};

export default MainSection;
