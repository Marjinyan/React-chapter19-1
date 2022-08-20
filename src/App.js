import { useState, useLayoutEffect } from 'react';

function App() {
  const [value, setValue] = useState(0);
  useLayoutEffect(() => {
      if (value === 0) {
      setValue( Math.random() * 1000);
    }
  }, [value]);
  return <div>
    <h1>current value - {value}</h1>
    <button onClick={() => setValue(0)}>random</button>
  </div>
}
export default App