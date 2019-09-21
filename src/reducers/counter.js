const initialState = {
  count: 0,
  clickCount: 0,
  searchInputted: 0
}; // acting as my original store!

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        clickCount: state.clickCount + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        clickCount: state.clickCount + 1
      };
    case 'NEW_NUMBER':
      return {
        ...state,
        searchInputted: action.number
      };
    case 'CHANGE_NUMBERS':
      return {
        ...state,
        count: (state.count = parseInt(state.searchInputted)),
        clickCount: (state.clickCount = 0)
      };
    default:
      return state; //prevents errors if the code won't run.
  }
}//goal is to have only one reducer. Lifecycle hook shows only one reducer (check for yourself)

export default counterReducer;
// case 'RESET':
//       return {
//         ...state,
//         count: (state.count = 0)
//       };