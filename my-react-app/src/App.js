import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorthifyHome from "./components/WorthifyHome";
import WorthifyFormPage from "./components/WorthifyFormPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WorthifyHome />} />
        <Route path="/form-page" element={<WorthifyFormPage />} />
      </Routes>
    </Router>
  );
}

export default App;
