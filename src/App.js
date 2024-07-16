import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import { useStore } from "./store/PortfolioState";

function App() {
  const { mode } = useStore();
  return (
    <div className={`app ${mode ? "light-mode" : "dark-mode"}`}>
      <Router basename="manu.me">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
