const INIT_STATE = {
  loadingUser: null,
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
      localStorage.setItem('token', action.user.email);
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
    case 'GET_USER_REQUEST':
      return {
        ...state,
        loadingUser: true,
      }
    case 'GET_USER_SUCCESS':
      return {
        ...state,
        loadingUser: false,
        user: action.user.email,
      }
    default:
      return state;
  }
}