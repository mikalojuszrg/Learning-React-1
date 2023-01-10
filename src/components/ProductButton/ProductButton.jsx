import styles from "./ProductButton.module.scss";
import PropTypes from "prop-types";

const ProductButton = ({ children, onClick, submit }) => {
  const styles = {
    border: submit ? "none" : "1px solid grey",
    color: submit ? "white" : "black",
    marginLeft: submit ? "10px" : "0",
    padding: "0.5rem 1rem",
    backgroundColor: submit ? "#1199ee" : "transparent",
  };

  return (
    <button style={styles} onClick={onClick}>
      {children}
    </button>
  );
};

ProductButton.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default ProductButton;
