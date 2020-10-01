import initialState from "./initialState";
import * as ActionTypes from "../actions/actionTypes";

const items = (state = initialState.items, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_ITEMS:
      return { ...state, itemList: action.payload };
    case ActionTypes.SET_ITEM_ID_IN_PREVIEW:
      if (action.payload === state.itemIdInPreview || action.payload === null) {
        return { ...state, itemIdInPreview: null };
      } else return { ...state, itemIdInPreview: action.payload };
    default:
      return state;
  }
};

export default items;
