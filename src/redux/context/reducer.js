const INIT_STATE = {
  loading: null,
  items: [],
}

export default function contextReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'CONTEXT_GET_ITEMS':
      return {
        ...state,
        items: [1, 2, 3, 4, 5],
      }
    default:
      return {
        ...state,
      }
  }
}