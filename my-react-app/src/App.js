import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorthifyHomePage from "./components/WorthifyHomePage";
import WorthifyFormPage from "./components/WorthifyFormPage";
import WorthifyAboutPage from "./components/WorthifyAboutPage";
import WorthifyChartPage from "./components/WorthifyChartPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WorthifyHomePage />} />
        <Route path="/form-page" element={<WorthifyFormPage />} />
        <Route path="/about-page" element={<WorthifyAboutPage />} />
        <Route path="/chart-page" element={<WorthifyChartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
