import * as React from 'react';
import { MapBrazil } from 'react-brazil-map';
import './style.css';

export default function App() {
  return (
    <div className="App">
      <MapBrazil colorLabel="white" width={500} height={500} />
    </div>
  );
}
