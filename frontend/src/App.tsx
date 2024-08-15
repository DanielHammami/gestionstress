import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import ModulePage from "./pages/ModulePage";

const App: React.FC = () => {
  return (
    // <Router>
    //   <Routes>
    //     <Route path='/' element={<HomePage />} />
    //     <Route path='/dashboard' element={<Dashboard />} />
    //   </Routes>
    // </Router>
    <ModulePage />
  );
};

export default App;
