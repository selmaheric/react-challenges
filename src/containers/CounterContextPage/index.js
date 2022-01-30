import { createContext, useContext, useReducer } from 'react';

import './styles.scss';

const INIT_STATE = {
  counter: 0
}

const countReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      return state;
  }
}

const myContext = createContext(INIT_STATE);

function Counter() {
  const { state } = useContext(myContext);
  console.log('Counter render');
  return (
    <div className='text mb-10'>Counter {state.counter}</div>
  )
}

function IncrementButton() {
  const { dispatch } = useContext(myContext);

  const increment = () => {
    dispatch({
      type: 'INCREMENT'
    })
  }

  console.log('IncrementButton render');

  return <button onClick={increment} className='mb-10'>Increment</button>

}

function DecrementButton() {
  const { dispatch } = useContext(myContext);

  const increment = () => {
    dispatch({
      type: 'DECREMENT'
    })
  }

  console.log('DecrementButton render');

  return <button onClick={increment} className='mb-10'>Decrement</button>

}

export default function CounterContextPage() {
  const [state, dispatch] = useReducer(countReducer, INIT_STATE);

  console.log('--------------');
  console.log('ContextPage render');

  return (
    <myContext.Provider value={{ state, dispatch }}>
      <div className='container'>
        <div className='title'>Counter Context</div>
        <div className='subTitle'>This counter is created using context</div>
        <Counter />
        <IncrementButton />
        <DecrementButton />
      </div>
    </myContext.Provider>
  )
}