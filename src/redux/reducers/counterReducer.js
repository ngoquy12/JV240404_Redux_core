// import { DECREMENT, INCREMENT } from "../constants/actionTypes";
import * as types from "../constants/actionTypes";

const counterReducer = (state = 10, action) => {
  console.log("Action: ", action.type);

  switch (action.type) {
    case types.INCREMENT:
      state += 1;

      return state;

    case types.DECREMENT:
      state -= 1;

      return state;

    default:
      return state;
  }
};

export default counterReducer;
