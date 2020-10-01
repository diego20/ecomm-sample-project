import * as ActionTypes from "./actionTypes";

const loadItems = (itemList) => ({
  type: ActionTypes.LOAD_ITEMS,
  payload: itemList,
});

const setItemInPreview = (itemId) => ({
  type: ActionTypes.SET_ITEM_ID_IN_PREVIEW,
  payload: itemId,
});

export { loadItems, setItemInPreview };
