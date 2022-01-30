export const getItems = () => async (dispatch) => {
  dispatch({
    type: 'CONTEXT_GET_ITEMS'
  });
}