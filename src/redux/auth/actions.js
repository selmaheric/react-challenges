function loginMock() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 500)
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