export const increase = () => async (dispatch) => {
  dispatch({
    type: 'INCREASE'
  });
}

export const decrease = () => async (dispatch) => {
  dispatch({
    type: 'DECREASE'
  });
}