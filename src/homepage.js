import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to Fashion Assistant</h1>
      <input type="text" placeholder="Ask a fashion question..." />
      <button>Get Outfit Suggestion</button>
      <div>
        <Link to="/chatbot">Chatbot</Link> | 
        <Link to="/outfit-generator">Outfit Generator</Link> | 
        <Link to="/color-palette">Color Palette</Link> | 
        <Link to="/weather-outfit">Weather Outfit</Link> | 
        <Link to="/lookbook">Lookbook</Link>
      </div>
    </div>
  );
};

export default Homepage;
