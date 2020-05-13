import React from 'react';
import lakes from '../src/lakes.jpeg';
import './App.css';

function Lakes() {
  return (
    <div>
      <h1>Lakes Gallery</h1>
      <img src = {lakes}></img>
    </div>
  );
}

export default Lakes;
