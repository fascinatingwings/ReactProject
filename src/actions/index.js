export const increment = () => ({
  type: 'INCREMENT'
});

export const decrement = () => ({
  type: 'DECREMENT'
});

export const newNumber = (number) => ({
  type: 'NEW_NUMBER',
  number
}) //by not activating with ; this allows linking to next action

export const changeNumbers = () => ({
  type: 'CHANGE_NUMBERS'
});

// export const reset = () => ({
//   type: 'RESET'
// });