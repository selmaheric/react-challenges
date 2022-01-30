import { useState, createContext, useContext } from 'react';
import './styles.scss';

const CounterContext = createContext();

function ButtonComponent() {
  const context = useContext(CounterContext);
  const { countHandler } = context;

  return (
    <button className='button' onClick={countHandler}>Increase</button>
  )
}

export default function CounterPage() {
  const [counter, setCounter] = useState(0);

  const countHandler = () => {
    setCounter(counter + 1);
  }

  return (
    <CounterContext.Provider value={{ counter, countHandler }}>
      <div className='counter'>
        <div className='title'>Counter Page</div>
        <div className='subTitle'>This counter is created using context.</div>
        <div className='text mb-10'>Counter: {counter}</div>
        <ButtonComponent />
      </div>
    </CounterContext.Provider>
  )
}