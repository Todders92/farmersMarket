export default (state = {}, action) => {
  const {market, hours, booth, id} = action;
  switch (action.type) {
    case 'ADD_MARKET':
      return Object.assign({}, state, {
        [id]: {
          market: market,
          hours: hours,
          booth: booth,
          id: id
        }
      });
    case 'DELETE_MARKET':
        const newState = {...state};
        delete newState[id];
        return newState;
    default:
      return state;
    }
};