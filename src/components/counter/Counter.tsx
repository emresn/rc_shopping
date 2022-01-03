import { useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';

import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount,
  incrementIfOdd,
  selectCount,
} from './counterSlice';

const Counter = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div className='inline-flex flex-col gap-3 p-3 mx-auto w-full'>
      <div className='inline-flex flex-row gap-3 justify-center'>
        {buildButton('-', 'Decrement value', () => dispatch(decrement()))}
        <span className='p-4 text-xl'>{count}</span>
        {buildButton('+', 'Increment value', () => dispatch(increment()))}
      </div>
      <div className='inline-flex flex-row gap-3 justify-center w-full'>
        <input
          className='p-4 text-xl border-2'
          aria-label='Set increment amount'
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />

        {buildButton('Add Amount', '', () =>
          dispatch(incrementByAmount(incrementValue))
        )}
        {buildButton('Add Async', '', () =>
          dispatch(incrementAsync(incrementValue))
        )}
        {buildButton('Add If Odd', '', () =>
          dispatch(incrementIfOdd(incrementValue))
        )}
      </div>
    </div>
  );

  function buildButton(label: string, key: string, onClick: () => void) {
    return (
      <button
        key={label}
        className='p-4 text-white bg-gray-800 rounded-full'
        aria-label={key}
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
};

export default Counter;
