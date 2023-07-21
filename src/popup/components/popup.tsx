// src/App.tsx
import { useStore } from '../../store';
import logo from '../../assets/react.svg';
import '../index.css'

function Popup() {
  const count = useStore((state) => state.count);
  const increment = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);

  return (
    <div>
      <img src={logo} alt='logo' />
      <h2>My Chrome Extension</h2>
      <p>Count: {count}</p>
      <button className='button' onClick={increment}>Increment</button>
      <button className='button' onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Popup;
