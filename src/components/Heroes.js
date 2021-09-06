import "./Heroes.css";
import Hero from "./Hero";

function Heroes() {
  
 const users = [
  {
    name: "Salchicha",
    description: "Rica y Sabrosa",
    heroName: "Super Salchicha",
    img: "https://i.pinimg.com/474x/1e/da/1f/1eda1f1e9a10dd0e901fd28710ce0c2d.jpg",
  },

  {
    name: "Alvin",
    description: "Deadpool is an anti-hero",
    heroname: "Deadpool",
    img: "https://www.looper.com/img/gallery/what-marvel-wants-you-to-forget-about-deadpool/intro-1518721486.jpg",
  },

  {
    name: "Andriw",
    description:
      "Starlod is a god/human superhero from guardians of the Galaxy",
    heroName: "Peter Quill",
    img: "https://lumiere-a.akamaihd.net/v1/images/guardians-characterthumbnail-starlord_27084db3.jpeg?region=0%2C0%2C300%2C300",
  }
 ]

  return (
    <div className="heroes-container">
      <Hero user = {users[0]}/>
      <Hero user = {users[1]}/>
      <Hero user = {users[2]}/>
    </div>
  );
}

export default Heroes;
