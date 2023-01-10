import { useState } from "react";
import classNames from "classnames";
import styles from "./Product.module.scss";
import PropTypes from "prop-types";
import ProductButton from "../ProductButton/ProductButton";

const cn = classNames.bind(styles);

const Product = ({ image, title, price, description, category }) => {
  const [productCount, setProductCount] = useState(0);
  const [available, setAvailable] = useState(10);

  const handleIncrementCount = () => {
    if (available > 0) {
      setProductCount((prevValue) => prevValue + 1);
      setAvailable((prevValue) => prevValue - 1);
    }
  };

  const handleDecrementCount = () => {
    if (available < 10) {
      setProductCount((prevValue) => prevValue - 1);
      setAvailable((prevValue) => prevValue + 1);
    }
  };

  return (
    <div className={styles.product}>
      <div className={styles.product__illustration}>
        <img src={image} alt="calendar of cars" />
      </div>
      <div className={styles.product__information}>
        <h1 className={styles.product__heading}>{title}</h1>
        <h2>{price}</h2>
        <p className={styles.product__description}>{description}</p>
        <p>Available: {available}</p>
        <div className={styles.product__buttons}>
          <ProductButton submit={false} onClick={handleDecrementCount}>
            -
          </ProductButton>
          <div className={styles.product__count}>{productCount}</div>
          <ProductButton submit={false} onClick={handleIncrementCount}>
            +
          </ProductButton>
          <ProductButton className={styles.product__submitButton} submit={true}>
            ADD TO CART
          </ProductButton>
        </div>
        <p>{category}</p>
      </div>
    </div>
  );
};

Product.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  category: PropTypes.string,
};

export default Product;
