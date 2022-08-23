import "./App.css";
import { api } from "./api/api.js";

function App() {
  const handleClick = () => {
    api.get("/users").then((res) => console.log(res));
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
