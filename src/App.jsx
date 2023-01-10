import "./App.css";
import Product from "./components/Product/Product";

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
  return (
    <div className="App">
      <Product {...productInfo} />
    </div>
  );
}

export default App;
