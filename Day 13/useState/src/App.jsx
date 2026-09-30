import { useState } from "react"

const App = () => {
  const [count, setCount] = useState(0);
  // let count = 0;

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const incrementByFive = () => {
    setCount(count + 5);
  }

  const decrementByFive = () => {
    setCount(count - 5);
  }

  const reset = () => {
    setCount(0);
  }

  // const increment = () => {
  //   count = count + 1;
  //   console.log(count);
  // }

  return (
    <>
      <h1>{count}</h1>
      <button className="btn1 btn" onClick={increment}>Increment</button>
      <button className="btn2 btn" onClick={decrement}>Decrement</button>
      <button className="btn3 btn" onClick={incrementByFive}>Increment by 5</button>
      <button className="btn4 btn" onClick={decrementByFive}>Decrement by 5</button>
      <button className="btn5 btn" onClick={reset}>Reset</button>
    </>
  )
}

export default App