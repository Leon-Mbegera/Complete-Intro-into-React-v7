import { useState } from "react";

const SearchParams = () => {
  const [state, setState] = useState("Tell me what's your motive");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          location
          <input
            id="location"
            value={state}
            placeholder="Location"
            onChange={(e) => setState(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
