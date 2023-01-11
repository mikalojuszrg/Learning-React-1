import DeleteButton from "../DeleteButton/DeleteButton";

const ProductCard = ({ image, description, caption, price, onClick }) => {
  return (
    <div>
      <img src={image} alt="product image" />
      <h1>{caption}</h1>
      <h2>{price}</h2>
      <p>{description}</p>
      <DeleteButton onClick={onClick}>Delete</DeleteButton>
    </div>
  );
};

export default ProductCard;
