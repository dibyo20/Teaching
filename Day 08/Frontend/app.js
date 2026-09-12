import Square from "./Square.js";
import Circle from "./Circle.js";

const App = () => {
    return React.createElement("div", { class: "app" }, [Square(), Circle()]);
}

export default App;