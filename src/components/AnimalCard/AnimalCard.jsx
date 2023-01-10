import styles from "./AnimalCard.module.scss";

const AnimalCard = ({ imageUrl, title, subtitle }) => {
  return (
    <div className={styles.animal}>
      <img src={imageUrl} alt="Animal picture" />
      <h1 className={styles.animal__title}>{title}</h1>
      <h2 className={styles.animal__subtitle}>{subtitle}</h2>
    </div>
  );
};

export default AnimalCard;
