import Pet from "./Pet";

export default Results = (props) => {
  const pets = props;
  return (
    <div className="search">
      {!pets.length ? (
        <div>There no pets available.</div>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            animal={pet.animal}
            name={pet.name}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};
