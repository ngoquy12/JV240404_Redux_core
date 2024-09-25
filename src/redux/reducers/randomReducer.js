const randomReducer = (state = [], action) => {
  console.log("Action: ", action);

  switch (action.type) {
    case "random":
      // Cập nhật lại state
      const newState = [...state, action.payload];

      return newState;

    default:
      return state;
  }
};

export default randomReducer;
