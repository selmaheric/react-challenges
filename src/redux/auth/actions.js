function loginMock() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000)
  })
}

export const login = (values) => async (dispatch) => {
  try {
    dispatch({
      type: 'LOGIN_REQUEST'
    });
    await loginMock();
    dispatch({
      type: 'LOGIN_SUCCESS',
      user: {
        email: values.email
      }
    });
  } catch(error) {
    dispatch({
      type: 'LOGIN_ERROR'
    });
  }
}

export const getUser = (values) => async (dispatch) => {
  try {
    dispatch({
      type: 'GET_USER_REQUEST'
    });
    await loginMock();
    dispatch({
      type: 'GET_USER_SUCCESS',
      user: {
        email: values.email
      }
    });
  } catch(error) {
    dispatch({
      type: 'GET_USER_ERROR'
    });
  }
}