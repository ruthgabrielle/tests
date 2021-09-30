import { useState } from 'react'
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  const [color, setColor] = useState('red')
  const [enabled, setEnable] = useState(false)

  const newColor = color === 'red' ? 'blue' : 'red'

  return (
    <div >
      <button
        style={{ backgroundColor: enabled ? 'gray' : color }}
        onClick={() => setColor(newColor)}
        disabled={enabled}>
        Change to {newColor}
      </button>
      <input
        type="checkbox"
        id="enable-button-checkbox"
        defaultChecked={enabled}
        aria-checked={enabled}
        onChange={(e) => setEnable(e.target.checked)} />
      <label htmlFor="enable-button-checkbox"> Disable Button</label>
    </div>
  );
}

export default App;
