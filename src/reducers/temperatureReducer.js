export default (state = null, action) => {
  switch (action.type) {
    case "Fetch_temp":
      return action.payload;

    default:
      return state;
  }
};
