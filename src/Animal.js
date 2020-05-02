import React from 'react';
import animal from '../src/animal.jpg';
import './App.css';

function Animal() {
  return (
    <div>
      <h1>Animal Gallery</h1>
      <img src = {animal}></img>
    </div>
  );
}

export default Animal;
