import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import WorthifyHome from "./components/WorthifyHome"; // Import WorthifyHome component

function App() {
  return (
    <Router>
      <div className="App">
        <WorthifyHome />
      </div>
    </Router>
  );
}

export default App;
