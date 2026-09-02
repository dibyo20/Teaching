import axios from 'axios';

async function getData() {
  try{
    const res = await axios.get("https://api.github.com/users");
    console.log(res.data);
  }catch(err){
    console.log(err);
  }
}
getData();

const App = () => {
  return (
    <div>Shagun</div>
  )
}

export default App