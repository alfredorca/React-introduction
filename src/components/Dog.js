function Dog({singleDog: {name, description, breed}}) {
  
 
 return (
    <>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{breed}</p>
    </>
  );
}

export default Dog;