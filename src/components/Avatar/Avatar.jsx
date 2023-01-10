import styles from "./Avatar.module.scss";

const Avatar = ({ backgroundColor, color, children }) => {
  return (
    <div className={styles.avatarContainer}>
      <div
        style={{ backgroundColor: backgroundColor, color: color }}
        className={styles.avatar}
      >
        {children}
      </div>
    </div>
  );
};

export default Avatar;
