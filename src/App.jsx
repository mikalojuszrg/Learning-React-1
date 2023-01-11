import { useState } from "react";
import "./App.css";
import Product from "./components/Product/Product";
import ProductCard from "./components/ProductCard/ProductCard";
import data from "./productData";

const productInfo = {
  image: "https://per4mmedia.com/wp-content/uploads/2021/11/mk2-2022-IG.jpg",
  title: "Volwswagen GOLF MK2 2022 Calendar",
  price: "10.00$",
  description:
    "12 unique designs  \n All pieces printed on heavyweight 200 gsm art paper  \n Limited to 50 pieces  \n One size: 11.7x16.5inch/(420x420mm)",
  availability: "AVAILABILITY: in stock",
  category: "Calendars",
};

function App() {
  const products = data.map((item) => {
    return (
      <ProductCard
        key={item.id}
        {...item}
        onClick={() => handleProductDelete(item.id)}
      />
    );
  });

  const [productList, setProductList] = useState(products);

  const handleProductDelete = (id) => {
    return setProductList((prevArray) =>
      prevArray.filter((item) => item.props.id !== id)
    );
  };

  return (
    <div className="App">
      <Product {...productInfo} />
      {productList}
    </div>
  );
}

export default App;
