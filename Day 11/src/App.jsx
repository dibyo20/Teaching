import Card from "./component/Card.jsx";

const App = () => {
  let users = [
    "Srijan",
    "Sneha",
    "Diganta",
    "Prerona",
    "Ramiz",
    "Adrija",
    "Saif",
    "Ankita",
  ];

  return (
    <>
      {users.map((user) => {
        return <Card name={user} />;
      })}
    </>
  );
};

export default App;
