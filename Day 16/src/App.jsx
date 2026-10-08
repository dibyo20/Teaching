import { useState } from "react";
import Card from "./components/Card.jsx";
import FormField from "./components/FormField.jsx";

const App = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");
  const [users, setUsers] = useState([]);

  const SubmitHandler = (e) => {
    e.preventDefault();
    const user = { name, description, role, image };
    setUsers([...users, user]);
    setName("");
    setDescription("");
    setRole("");
    setImage("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      setName(value);
    } else if (name === "description") {
      setDescription(value);
    } else if (name === "role") {
      setRole(value);
    } else if (name === "image") {
      setImage(value);
    }
  };

  const RemoveHandler = (index) => {
    
  }

  return (
    <div>
      <div className="container">
        <form
          className="form"
          onSubmit={(e) => {
            SubmitHandler(e);
          }}
        >
          <h2>Generate your Card</h2>
          <FormField
            name="name"
            value={name}
            placeholder="Enter name"
            onChange={handleChange}
          />
          <FormField
            name="description"
            value={description}
            placeholder="Enter description"
            onChange={handleChange}
          />
          <FormField
            name="image"
            value={image}
            placeholder="Enter Image Url"
            onChange={handleChange}
          />
          <FormField
            name="role"
            value={role}
            placeholder="Enter role"
            onChange={handleChange}
          />
          <button type="submit">Create Card</button>
        </form>
      </div>

      <div className="card-container">
        {users.map(function ({ name, description, image, role }, index) {
          return (
            <Card
              key={index}
              name={name}
              description={description}
              image={image}
              role={role}
              onRemove={()=>{
                RemoveHandler(index)
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
