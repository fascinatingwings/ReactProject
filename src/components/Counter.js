import React from 'react';

const Counter = ({ count, onDecrement, onIncrement, clickCount, onNewNumber, onChangeNumbers, searchNumber }) => {
  return (
    <div>
      <div>
        <button onClick={onDecrement}>-</button>
        <span>{count}</span>
        <button onClick={onIncrement}>+</button>
        <br />
        <h3>Times the increment/decrement buttons have been clicked: {clickCount}</h3>
        <input onChange={event => onNewNumber(event.target.value)} type="number" />
        <button onClick={() => onChangeNumbers(searchNumber)}>Change Count Number</button>
      </div>
    </div>//{clickCount} A Javascript insert box
  );//all pulling in from APP .js
}

export default Counter;

//  onReset
// <button onClick={onReset}>Reset</button>