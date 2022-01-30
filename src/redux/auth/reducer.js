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
      return {
        ...state,
        loading: false,
        user: {
          firstName: 'Selma',
          lastName: 'Heric'
        }
      }
    case 'LOGIN_ERROR':
      return {
        ...state,
        error: 'Error'
      }
    case 'LOGOUT':
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