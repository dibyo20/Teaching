import React from 'react'
import Men from "./Components/Men.jsx"
import Women from "./Components/Women.jsx"

const App = () => {
  const user1 = {
    name: "Diganta",
    gender: "male",
    age: 16
  }

  const user2 = {
    name: "Saif",
    gender: "male",
    age: 17
  }

  const user3 = {
    name: "Srijan",
    gender: "female",
    age: 21
  }

  return (
    <>
      {user1.gender === "male"? <Men/> : <Women/>}
      {user2.gender === "male"? <Men/> : <Women/>}
      {user3.gender === "male"? <Men/> : <Women/>}
    </>
  )
}

export default App