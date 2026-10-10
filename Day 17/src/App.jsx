import { useState, useEffect } from "react";
import Cards from "./components/Cards";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  async function getData() {
    const res = await axios.get("https://fakestoreapi.com/products/");
    console.log(res.data[0]);
    setData(res.data);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <button className="btn" onClick={getData}>
        Get Data
      </button>
      <div className="card-div">
        {data.map((item) => {
          return <Cards key={item.id} data={item} />;
        })}
      </div>
    </>
  );
};

export default App;
