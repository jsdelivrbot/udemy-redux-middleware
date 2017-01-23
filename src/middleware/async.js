export default ({ dispatch }) => {
  return next => action => {
    // if no payload or no .then (promise)
    if(!action.payload || !action.payload.then) {
      return next(action);
    }
    console.log('yes: promise', action);
    next(action);
  }
}
