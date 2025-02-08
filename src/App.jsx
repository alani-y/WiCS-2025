import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./homepage";
import StylePage from "./StylePage";
import WesternPage from "./WesternPage";
import ColorPalette from "./ColorPalette";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/style" element={<StylePage />} />
        <Route path="/style/western" element={<WesternPage />} />
        <Route path="/colorpalette" element={<ColorPalette />} />
      </Routes>
    </Router>
  );
}

export default App;