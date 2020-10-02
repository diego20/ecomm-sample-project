import initialState from "./initialState";
import * as ActionTypes from "../actions/actionTypes";

const localStorage = window.localStorage;

const shoppingCart = (state = initialState.shoppingCart, action) => {
  const shoppingCartArray = [...state.itemsInShoppingCart];
  let totalPrice = state.totalPrice;
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_ITEM: {
      // Increase count by One. If item not found, create new one with quantity 1.
      const { itemId, itemList } = action.payload;
      if (shoppingCartArray.length > 0) {
        const index = shoppingCartArray.findIndex(
          (element) => element.itemId === itemId
        );
        if (index >= 0) {
          shoppingCartArray[index].quantity++;
        } else shoppingCartArray.push(getShoppingCartItem(itemId, 1));
      } else shoppingCartArray.push(getShoppingCartItem(itemId, 1));
      totalPrice = updateTotalPrice(action.type, itemList, itemId, totalPrice);
      updateLocalStorage(shoppingCartArray, totalPrice);
      return { ...state, itemsInShoppingCart: shoppingCartArray, totalPrice };
    }
    case ActionTypes.SUBSTRACT_PRODUCT_ITEM: {
      // Decrease count by One. If quantity already One, remove item from shopping cart.
      const { itemId, itemList } = action.payload;
      if (shoppingCartArray.length > 0) {
        const index = shoppingCartArray.findIndex(
          (element) => element.itemId === itemId
        );
        if (index >= 0 && shoppingCartArray[index].quantity > 1) {
          shoppingCartArray[index].quantity--;
          totalPrice = updateTotalPrice(
            action.type,
            itemList,
            itemId,
            totalPrice
          );
        } else if (index >= 0 && shoppingCartArray[index].quantity <= 1) {
          shoppingCartArray.splice(index, 1);
          totalPrice = updateTotalPrice(
            action.type,
            itemList,
            itemId,
            totalPrice
          );
        }
      }
      updateLocalStorage(shoppingCartArray, totalPrice);
      return { ...state, itemsInShoppingCart: shoppingCartArray, totalPrice };
    }
    case ActionTypes.REMOVE_ALL_SHOPING_CART_ITEMS:
      updateLocalStorage([], 0);
      return { ...state, itemsInShoppingCart: [], totalPrice: 0 };
    case ActionTypes.LOAD_SHOPPING_CART: {
      const { storedItems, storedPrice } = action.payload;
      if (storedItems && storedItems.length && storedItems.length > 0) {
        return {
          ...state,
          itemsInShoppingCart: JSON.parse(storedItems),
          totalPrice: Number(storedPrice),
        };
      } else return state;
    }
    default:
      return state;
  }
};

const getShoppingCartItem = (itemId, quantity) => ({
  itemId,
  quantity,
});

const updateTotalPrice = (actionType, itemList, itemId, totalPrice) => {
  let outputPrice = 0;
  const foundElem = itemList.find((elem) => elem.id === itemId);
  if (foundElem) {
    if (actionType === ActionTypes.ADD_PRODUCT_ITEM) {
      outputPrice = Number((totalPrice += foundElem.price).toFixed(2));
    } else if (actionType === ActionTypes.SUBSTRACT_PRODUCT_ITEM) {
      outputPrice = Number((totalPrice -= foundElem.price).toFixed(2));
    }
  }
  if (totalPrice < 0) outputPrice = 0;
  return outputPrice;
};

const updateLocalStorage = (shopplingList, totalPrice) => {
  localStorage.setItem("itemsInShoppingCart", JSON.stringify(shopplingList));
  localStorage.setItem("totalPrice", totalPrice);
};

export default shoppingCart;
