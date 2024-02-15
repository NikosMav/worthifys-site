import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorthifyHomePage from "./components/pages/WorthifyHomePage";
import WorthifyFormPage from "./components/pages/WorthifyFormPage";
import WorthifyAboutPage from "./components/pages/WorthifyAboutPage";
import WorthifyChartPage from "./components/pages/WorthifyChartPage";
import WorthifyForecastingPage from "./components/pages/WorthifyForecastingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WorthifyHomePage />} />
        <Route path="/form-page" element={<WorthifyFormPage />} />
        <Route path="/about-page" element={<WorthifyAboutPage />} />
        <Route path="/chart-page" element={<WorthifyChartPage />} />
        <Route path="/forecasting-page" element={<WorthifyForecastingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
