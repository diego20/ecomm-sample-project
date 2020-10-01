import * as ActionTypes from "./actionTypes";

const localStorage = window.localStorage;

const addProductItem = (itemId, itemList) => ({
  type: ActionTypes.ADD_PRODUCT_ITEM,
  payload: {
    itemId,
    itemList,
  },
});

function addProductUpdatePrice(itemId) {
  return (dispatch, getState) => {
    const {
      items: { itemList },
    } = getState();
    dispatch(addProductItem(itemId, itemList));
  };
}

const substractProductItem = (itemId, itemList) => ({
  type: ActionTypes.SUBSTRACT_PRODUCT_ITEM,
  payload: {
    itemId,
    itemList,
  },
});

function substractProductUpdatePrice(itemId) {
  return (dispatch, getState) => {
    const {
      items: { itemList },
    } = getState();
    dispatch(substractProductItem(itemId, itemList));
  };
}

const removeAllShopingCartItems = () => ({
  type: ActionTypes.REMOVE_ALL_SHOPING_CART_ITEMS,
});

const restoreShoppingCart = (payload) => ({
  type: ActionTypes.LOAD_SHOPPING_CART,
  payload,
});

function loadShoppingCart() {
  return (dispatch) => {
    const storedItems = localStorage.getItem("itemsInShoppingCart");
    const storedPrice = localStorage.getItem("totalPrice");
    dispatch(restoreShoppingCart({ storedItems, storedPrice }));
  };
}

export {
  addProductUpdatePrice,
  substractProductUpdatePrice,
  removeAllShopingCartItems,
  loadShoppingCart,
};
