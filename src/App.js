import { useState } from 'react'
import './App.css';

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
        onChange={() => setEnable(!enabled)} />
      <label htmlFor="enable-button-checkbox"> disable button</label>
    </div>
  );
}

export default App;
