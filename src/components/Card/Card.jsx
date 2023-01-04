import styles from "./Card.module.scss";

const Card = ({ imageUrl, caption }) => {
  return (
    <div>
      <img src={imageUrl} />
      <figcaption className={styles.caption}>{caption}</figcaption>
    </div>
  );
};

export default Card;
