import "./App.css";
import axios from "axios";

function App() {
  const handleClick = () => {
    axios.get("http://localhost:5050/users").then((res) => console.log(res));
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

export default App;
