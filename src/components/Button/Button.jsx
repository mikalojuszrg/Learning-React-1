import styles from "./Button.module.scss";
import PropTypes from "prop-types";

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
