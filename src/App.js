import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Chatbot from './pages/Chatbot';
import OutfitGenerator from './pages/OutfitGenerator';
import ColorPalette from './pages/ColorPalette';
import WeatherOutfit from './pages/WeatherOutfit';
import Lookbook from './pages/Lookbook';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/outfit-generator" element={<OutfitGenerator />} />
        <Route path="/color-palette" element={<ColorPalette />} />
        <Route path="/weather-outfit" element={<WeatherOutfit />} />
        <Route path="/lookbook" element={<Lookbook />} />
      </Routes>
    </Router>
  );
}

export default App;
