import Dog from "./Dog";

function Dogs() {
  let dogs = [
    {
      name: "Max",
      description: "Max is a playful dog",
      breed: "Golden Retriever",
    },
    {
      name: "Vito",
      description: "Vito is a very small dog who always like to sleep",
      breed: "Chihuahua",
    },
    {
      name: "German Tequila",
      description: "German Tequila will get you Engineerly Drunk AF",
      breed: "German Shepperd",
    },
    {
      name: "French Vodka",
      description: "Cold but arrogant",
      breed: "Husky",
    },
    {
      name: "American Scotch",
      description: "Tries to be Whiskey, but burbs on",
      breed: "Pitbull",
    },
    {
      name: "Venezuelan Sake",
      description: "He eats the Arepas, for God's SAKE",
      breed: "Jack Rusell",
    },
    {
      name: "Chinese Fernet",
      description: "Solves Mysteries",
      breed: "Great Dane",
    },
  ];

  return (
    <div style={{ justifyContent: "center" }}>
      <div className="container">
        <div className="row">
          {dogs &&
            dogs.map((dog) => {
              return (
                <div className="col-4">
                  <Dog singleDog={dog} />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Dogs;
