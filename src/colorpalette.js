import React, { useState } from "react";

const colorCombinations = {
  black: ["White", "Gold", "Red"],
  blue: ["White", "Beige", "Gray"],
  red: ["Black", "White", "Navy"],
};

const palettes = [
  ["#D8E2C6", "#E3EACD", "#FFF9E3", "#FDEDC3", "#D4A276"],
  ["#001F3F", "#D72638", "#FCAE1E", "#F7C242", "#F4E1B7"],
  ["#5D0E99", "#6546B6", "#3386D6", "#34C5E6", "#94F1F8"],
  ["#315F6B", "#FEF6C9", "#E3A857", "#A82D28", "#610C0C"],
  ["#3A506B", "#5BC0EB", "#AADFF7", "#FA7268", "#0B132B"],
  ["#C5C8B9", "#87A68A", "#4F6F52", "#2E4852", "#1E2D3D"],
  ["#89CFF0", "#0096C7", "#004E89", "#023047", "#FB8500"],
  ["#045A5A", "#003B46", "#041C32", "#1C1C1C", "#3D1E6D"],
  ["#D4A276", "#FDEDC3", "#FFF9E3", "#C3B091", "#A58B6F"],
  ["#FFA500", "#FF4500", "#FF1493", "#8A2BE2", "#1E90FF"],
  ["#E63946", "#F4A261", "#E9C46A", "#2A9D8F", "#264653"],
  ["#A3A8F0", "#9893DA", "#8D80C7", "#8167B2", "#7650A1"]
];

const ColorPalette = () => {
  const [color, setColor] = useState("black");

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Popular Color Palettes</h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {palettes.map((palette, index) => (
          <div key={index} className="p-4 bg-white shadow-md rounded-lg">
            <div className="flex space-x-1 mb-4">
              {palette.map((color, i) => (
                <div key={i} className="h-16 w-1/5 rounded" style={{ backgroundColor: color }}></div>
              ))}
            </div>
            <p className="text-sm text-gray-500">{Math.floor(Math.random() * 50000)} saves</p>
          </div>
        ))}
      </div>

      {/* Color Matching Dropdown */}
      <div className="mt-10 text-center">
        <h2 className="text-xl font-semibold mb-2">Color Palette Matching</h2>
        <select className="p-2 border rounded" onChange={(e) => setColor(e.target.value)}>
          {Object.keys(colorCombinations).map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <h3 className="mt-4 text-lg font-medium">Matches:</h3>
        <p className="text-gray-700 text-sm">{colorCombinations[color].join(", ")}</p>
      </div>
    </div>
  );
};

export default ColorPalette;