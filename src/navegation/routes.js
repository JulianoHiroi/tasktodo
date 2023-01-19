import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import MyTask from "../pages/MyTasks";
import Navbar from "../layout/Navbar";

function Navegation() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mytasks" element={<MyTask />} />
      </Routes>
    </Router>
  );
}
export default Navegation;
