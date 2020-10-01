import initialState from "./initialState";
import * as ActionTypes from "../actions/actionTypes";

const checkout = (state = initialState.checkout, action) => {
  switch (action.type) {
    case ActionTypes.SET_CHECKOUT:
      return { ...state, isInCheckout: action.shouldSetView };
    default:
      return state;
  }
};

export default checkout;
