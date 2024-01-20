import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorthifyHomePage from "./components/WorthifyHomePage";
import WorthifyFormPage from "./components/WorthifyFormPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WorthifyHomePage />} />
        <Route path="/form-page" element={<WorthifyFormPage />} />
      </Routes>
    </Router>
  );
}

export default App;
