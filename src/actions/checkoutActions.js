import * as ActionTypes from "./actionTypes";

const setCheckoutView = (shouldSetView) => ({
  type: ActionTypes.SET_CHECKOUT,
  shouldSetView
});

export { setCheckoutView };
