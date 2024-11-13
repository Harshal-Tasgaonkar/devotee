
import "./assets/css/main.css";


import "./assets/css/gallery.css";


import { HashRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Mission from "./components/Mission";
import CowProtection from "./components/CowProtection";
import Projects from "./components/Projects";
import Events from "./components/Events";
import Objectives from "./components/Objectives";
import Governance from "./components/Governance";
import Leadership from "./components/Leadership";
import FoodDistribution from "./components/FoodDistribution";


// import "./assets/js/bootstrap.bundle.min.js";
// import "./assets/js/main.js";
// import "./assets/js/counter.js";
// import "./assets/js/jquery.min.js"


function App() {
  return (
   
   <>
   <HashRouter>

   <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mission" element={<Mission />} />
                <Route path="/objectives" element={<Objectives />} />
                <Route path="/governance" element={<Governance />} />
                <Route path="/leadership" element={<Leadership />} />
                <Route path="/fooddistribution" element={<FoodDistribution />} />
                <Route path="/cowprotection" element={<CowProtection />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/events" element={<Events />} />
   </Routes>

   </HashRouter>
   </>

  );
}

export default App;
