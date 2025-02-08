import React, { useState } from 'react';

const colorCombinations = {
  black: ['White', 'Gold', 'Red'],
  blue: ['White', 'Beige', 'Gray'],
  red: ['Black', 'White', 'Navy'],
};

const ColorPalette = () => {
  const [color, setColor] = useState('black');

  return (
    <div>
      <h2>Color Palette Matching</h2>
      <select onChange={(e) => setColor(e.target.value)}>
        {Object.keys(colorCombinations).map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
      <h3>Matches:</h3>
      <p>{colorCombinations[color].join(', ')}</p>
    </div>
  );
};

export default ColorPalette;
