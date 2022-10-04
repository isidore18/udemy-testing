import { useState } from 'react'
import './App.css';

function App() {
  const [buttonColor, setButtonColor] = useState('red');
  const [checked, setChecked] = useState(false);
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';

  return (
    <div >
      <button
        style={{ backgroundColor: checked ? 'gray' : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={checked}
      >
        Change to {newButtonColor}
      </button>
    <form>
      <label htmlFor="disable-button-checkbox" >Disable button</label>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        aria-checked={checked}
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)} />
        </form>
    </div>
  );
}

export default App;
