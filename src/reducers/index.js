import { combineReducers } from "redux";
import checkout from "./checkoutReducer";
import items from "./itemsReducer";
import shoppingCart from "./shoppingCartReducer";

const rootReducer = combineReducers({
  checkout,
  items,
  shoppingCart
});
export default rootReducer;
