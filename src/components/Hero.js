import './Hero.css'


function Hero({user: {img, name, description, heroName}} ) {
  
 //JSX
  return (
    <div className="hero-box">
      <img className="hero-image" src={img} alt="HeroImage" />
      <p> This is {name}'s' Hero</p>
      <p>{description}</p>
      <button>Check {heroName} </button>
    </div>
  );
}

export default Hero;
