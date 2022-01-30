const INIT_STATE = {
  counter: 0
}

export default function counterReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'INCREASE':
      return {
        ...state,
        counter: state.counter + 1
      }
    case 'DECREASE':
      return {
        ...state,
        counter: state.counter - 1
      }
    default:
      return state;
  }
}