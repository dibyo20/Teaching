import axios from 'axios';

async function getData() {
  try{
    const res = await axios.get("https://api.github.com/users");
    console.log(res.data);
  }catch(err){
    console.log(err);
  }
}

const App = () => {
  return (
    <button onClick={getData}>Get Response</button>
  )
}

export default App