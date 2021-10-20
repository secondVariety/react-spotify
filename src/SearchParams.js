import { useState } from "react";

const animals = ["Bird", "Cat", "Repitles"];

const SearchParams = () => {
  const [location, setLocation] = useState("Seatle");
  const [animal, setAnimal] = useState("Bird");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="location"
            type="text"
          />
          <label htmlFor="animal">
            Animal
            <select
              id="animal"
              name="animal"
              value={animal}
              onChange={(e) => setAnimal(e.target.value)}
              onBlur={(e) => setAnimal(e.target.value)}
            >
              <option></option>
              {animals.map((animal) => (
                <option value={animal} key={animal}>
                  {animal}
                </option>
              ))}
            </select>
          </label>
          <button>Submit</button>
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
