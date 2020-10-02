import { setCheckoutView } from "../actions/checkoutActions";
import checkout from "./checkoutReducer";

describe("Checkout Reducer tests", () => {
  it("Should update the checkout view", () => {
    const initialState = { isInCheckout: false };
    const action = setCheckoutView(true);
    const newState = checkout(initialState, action);
    expect(newState.isInCheckout).toEqual(true);
  });
  it("Should update the checkout view with same boolean", () => {
    const initialState = { isInCheckout: false };
    const action = setCheckoutView(false);
    const newState = checkout(initialState, action);
    expect(newState.isInCheckout).toEqual(false);
  });
});
