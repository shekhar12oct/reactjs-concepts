import { useMemo, useState, useCallback } from 'react';
import UsememoUseCallbackReactMemo from './components/UsememoUseCallbackReactMemo';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(false);

  // useMemo to memoize a computed value
  const doubled = useMemo(() => {
    console.log('Calculating doubled value...');
    return count * 2;
  }, [count]);

  // useCallback to memoize the function
  const handleClick = useCallback(() => {
    console.log('Child button clicked');
  }, []);
  return (
    <div>
      <h2>Simple Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
      <button onClick={() => setOther((o) => !o)}>Toggle Other State</button>

      <UsememoUseCallbackReactMemo number={doubled} onClick={handleClick} />
    </div>
  );
}

export default App;
