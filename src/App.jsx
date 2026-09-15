import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Presale from "./pages/Presale";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/presale" element={<Presale />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;