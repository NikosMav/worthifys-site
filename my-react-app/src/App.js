import logo from "./assets/logo.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Worthify</h1>
        <p>
          Welcome to Worthify! Your solution for valuing and recycling used
          cars.
        </p>
      </header>
    </div>
  );
}

export default App;
