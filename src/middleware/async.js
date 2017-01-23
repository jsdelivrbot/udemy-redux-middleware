export default ({ dispatch }) => {
  return next => action => {
    // if no payload or no .then (promise)
    if(!action.payload || !action.payload.then) {
      return next(action);
    }
    action.payload
    .then((response) => {
      const newAction = { ...action, payload: response.data };
      dispatch(newAction);
    });
  }
}
