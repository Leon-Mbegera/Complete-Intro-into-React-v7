import { useEffect, useState, useContext } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
import ThemeContext from "./ThemeContext";
// import { useContext } from "react/cjs/react.production.min";

const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
  const [location, updateLocation] = useState("Nairobi");
  const [animal, updateAnimal] = useState("");
  const [breed, updateBreed] = useState("");
  const [pets, setPets] = useState([]);
  const [breedList] = useBreedList(animal);
  const [theme, setTheme] = useContext(ThemeContext);
  console.log(theme, setTheme);

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );
    const json = await res.json();

    setPets(json.pets);
  }

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => updateLocation(e.target.value)}
          />
        </label>
        <label htmlFor="animal">
          animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              updateAnimal(e.target.value);
            }}
          >
            <option value="" disabled>
              select animal
            </option>
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            disabled={!breedList.length}
            id="breed"
            value={breed}
            onChange={(e) => updateBreed(e.target.value)}
            onBlur={(e) => updateBreed(e.target.value)}
          >
            <option />
            {breedList.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <label>
          Theme
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            onBlur={(e) => setTheme(e.target.value)}
          >
            <option value="peru">Peru</option>
            <option value="black">Peru</option>
            <option value="green">Peru</option>
            <option value="pink">Peru</option>
            <option value="yellow">Peru</option>
          </select>
        </label>
        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
