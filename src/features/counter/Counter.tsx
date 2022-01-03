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
        <button
          className='p-4 text-white bg-gray-800 rounded-full'
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <span className='p-4 text-xl'>{count}</span>
        <button
          className='p-4 text-white bg-gray-800 rounded-full'
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className='inline-flex flex-row gap-3 justify-center w-full'>
        <input
          className='p-4 text-xl border-2'
          aria-label='Set increment amount'
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className='px-3 py-1 text-white bg-gray-800 rounded-xl'
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className='px-3 py-1 text-white bg-gray-800 rounded-xl'
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className='px-3 py-1 text-white bg-gray-800 rounded-xl'
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
};

export default Counter;
