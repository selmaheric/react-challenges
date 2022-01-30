import { useState } from 'react';
import './styles.scss';

function ButtonComponent({ onClick }) {
  return (
    <button className='button' onClick={onClick}>Increase</button>
  )
}

export default function CounterPage() {
  const [counter, setCounter] = useState(0);

  return (
    <div className='counter'>
      <div className='title'>Counter Page</div>
      <div className='counterNumber'>Counter: {counter}</div>
      <ButtonComponent onClick={() => setCounter(counter + 1)}/>
    </div>
  )
}