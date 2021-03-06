export default (state = [], action) => {
  switch (action.type) {
    case 'GET_SURFBOARD_SUCCESS':
      return action.surfboards;

    case 'CREATE_SURFBOARD_SUCCESS':
      return state.concat(action.surfboard);

    default:
      return state;
  }
};
