import { useState } from "react";
import Cards from "./components/Cards.jsx";

const App = () => {
  const [name, setName] = useState("");
  const [allNames, setAllNames] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newname = [...allNames, name];
    setAllNames(newname);
    setName("");
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter your name"
          required
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
      {allNames.map((elem, idx) => (
        <Cards key={idx} name={elem} />
      ))}
    </div>
  );
};

export default App;
