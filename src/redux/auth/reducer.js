const INIT_STATE = {
  loading: null,
  user: null,
  error: null
}

export default function authReducer(state = INIT_STATE, action) {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return {
        ...state,
        loading: true,
      }
    case 'LOGIN_SUCCESS':
      localStorage.setItem('token', 'token');
      return {
        ...state,
        loading: false,
        user: action.user
      }
    case 'LOGIN_ERROR':
      return {
        ...state,
        error: 'Error'
      }
    case 'LOGOUT':
      localStorage.removeItem('token');
      return {
        ...state,
        user: null,
      }
    default:
      return {
        ...state,
      }
  }
}