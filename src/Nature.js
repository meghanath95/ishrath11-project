import React from 'react';
import nature from '../src/nature.jpg';
import './App.css';

function Nature() {
  return (
    <div>
      <h1>Nature Gallery</h1>
      <img src = {nature}></img>
    </div>
  );
}

export default Nature;
