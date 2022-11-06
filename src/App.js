import "./App.scss";
import { Route, Routes } from "react-router-dom";
import BoilerPlate from "./components/boilerPlate/boilerPlate";
import About from "./pages/about/about";
import Community from "./pages/community/community";
import Events from "./pages/events/events";
import Home from "./pages/home/home";
import Team from "./pages/team/team";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BoilerPlate />}>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/community" element={<Community />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
