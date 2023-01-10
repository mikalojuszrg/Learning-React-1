import "./App.css";
import AnimalCard from "./components/AnimalCard/AnimalCard";
import Avatar from "./components/Avatar/Avatar";
import Hero from "./components/Hero/Hero";
import MainSection from "./components/MainSection/MainSection";
import MenuList from "./components/MenuList/MenuList";
import MoodChecker from "./components/MoodChecker/MoodChecker";

const single = ["Burger", "Fries", "Pizza"];
const couple = ["Drinks", "Dessert", "Soup"];
const family = ["BigBurger", "BigDessert", "BigFries"];

const avatarsArray = [
  { backgroundColor: "red", color: "white", text: "YO" },
  { backgroundColor: "blue", color: "white", text: "LOL" },
  { backgroundColor: "yellow", color: "black", text: "YES" },
];

const animals = [
  {
    imageUrl: "https://picsum.photos/200/150",
    title: "Animal1",
    subtitle:
      "Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
  },
  {
    imageUrl: "https://picsum.photos/200/150",
    title: "Animal2",
    subtitle:
      "Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
  },
  {
    imageUrl: "https://picsum.photos/200/150",
    title: "Animal2",
    subtitle:
      "Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum",
  },
];

const avatarsDisplayed = avatarsArray.map((avatar) => {
  return (
    <Avatar
      backgroundColor={avatar.backgroundColor}
      color={avatar.color}
      children={avatar.text}
    />
  );
});

const animalCards = animals.map((animal) => {
  return <AnimalCard {...animal} />;
});

console.log(avatarsDisplayed);

function App() {
  return (
    <div className="App">
      <Hero title="Title" description="Some description some descript" />
      <MainSection
        title="Portfolio"
        description=" Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum "
      />
      <MenuList customerType={couple} />
      {avatarsDisplayed}
      {animalCards}
      <MoodChecker />
    </div>
  );
}

export default App;
