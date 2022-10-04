import { useState } from 'react'
import './App.css';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, ' $1')
}

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [checked, setChecked] = useState(false);
  const newButtonColor = buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed';

  return (
    <>
      <button
        style={{ backgroundColor: checked ? 'gray' : buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={checked}
      >
        Change to {replaceCamelWithSpaces(newButtonColor)}
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
    </>
  );
}
export default App;
