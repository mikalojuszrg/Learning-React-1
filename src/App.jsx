import "./App.css";
import Hero from "./components/Hero/Hero";
import MainSection from "./components/MainSection/MainSection";

function App() {
  return (
    <div className="App">
      <Hero title="Title" description="Some description some descript" />
      <MainSection
        title="Portfolio"
        description="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "
      />
    </div>
  );
}

export default App;
