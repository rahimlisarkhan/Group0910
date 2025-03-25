import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, incrementByAmount } from './store/slice/counterSlice';

export function Counter() {
  const { value } = useSelector((state) => state.counterData);

  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => {
            const payload = incrementByAmount(100);

            // console.log('payload', payload);

            dispatch(payload);
            // dispatch({ type: 'counter/incrementByAmount', payload: 100 });
          }}
        >
          Increment
        </button>
        <span>{value}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
