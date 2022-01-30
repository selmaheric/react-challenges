
import { useSelector, useDispatch } from 'react-redux';

import { increase, decrease } from '../../redux/counter/actions';

import './styles.scss';


function Counter() {
  const { counter } = useSelector(state => state.counter);
  console.log('Counter render');
  return (
    <div className='text mb-10'>Counter {counter}</div>
  )
}

function IncrementButton() {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(increase())
  }

  console.log('IncrementButton render');

  return <button onClick={increment} className='mb-10'>Increment</button>

}

function DecrementButton() {
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(decrease());
  }

  console.log('DecrementButton render');

  return <button onClick={increment} className='mb-10'>Decrement</button>

}

export default function CounterReduxPage() {

  console.log('--------------');
  console.log('CounterReduxPage render');

  return (
    <div className='container'>
      <div className='title'>Counter Redux</div>
      <div className='subTitle'>This counter is created using redux</div>
      <Counter />
      <IncrementButton />
      <DecrementButton />
    </div>
  )
}