import {
  ADD_PRODUCT_ITEM,
  LOAD_SHOPPING_CART,
  REMOVE_ALL_SHOPING_CART_ITEMS,
  SUBSTRACT_PRODUCT_ITEM,
} from "../actions/actionTypes";

import shoppingCartReducer from "./shoppingCartReducer";

describe("Shopping Cart Reducer tests", () => {
  let itemList = [
    { id: 5, price: 200 },
    { id: 2, price: 50 },
  ];

  let initialState = { itemsInShoppingCart: [], totalPrice: 0 };

  describe("Tests for adding a new product and adding quantities for a product", () => {
    it("Should add first product to shopping list and update accumulated price", () => {
      const action = {
        type: ADD_PRODUCT_ITEM,
        payload: { itemId: 5, itemList },
      };
      const newState = shoppingCartReducer(initialState, action);
      expect(newState.itemsInShoppingCart.length).toEqual(1);
      expect(newState.itemsInShoppingCart[0].itemId).toEqual(5);
      expect(newState.itemsInShoppingCart[0].quantity).toEqual(1);
      expect(newState.totalPrice).toEqual(200);
    });

    it("Should add quantity to existing product and update accumulated price", () => {
      initialState = {
        itemsInShoppingCart: [
          {
            itemId: 5,
            quantity: 2,
          },
        ],
        totalPrice: 400,
      };
      const action = {
        type: ADD_PRODUCT_ITEM,
        payload: { itemId: 5, itemList },
      };
      const newState = shoppingCartReducer(initialState, action);
      expect(newState.itemsInShoppingCart.length).toEqual(1);
      expect(newState.itemsInShoppingCart[0].itemId).toEqual(5);
      expect(newState.itemsInShoppingCart[0].quantity).toEqual(3);
      expect(newState.totalPrice).toEqual(600);
    });

    it("Should add new product to shopping list and update accumulated price", () => {
      initialState = {
        itemsInShoppingCart: [
          {
            itemId: 5,
            quantity: 2,
          },
        ],
        totalPrice: 400,
      };
      const action = {
        type: ADD_PRODUCT_ITEM,
        payload: { itemId: 2, itemList },
      };
      const newState = shoppingCartReducer(initialState, action);
      expect(newState.itemsInShoppingCart.length).toEqual(2);
      expect(newState.itemsInShoppingCart[1].itemId).toEqual(2);
      expect(newState.itemsInShoppingCart[0].quantity).toEqual(2);
      expect(newState.itemsInShoppingCart[1].quantity).toEqual(1);
      expect(newState.totalPrice).toEqual(450);
    });
  });

  describe("Tests for removing a product and substracting quantities from a product", () => {
    it("Should remove product with a single quantity from shopping list and update accumulated price", () => {
      initialState = {
        itemsInShoppingCart: [
          {
            itemId: 5,
            quantity: 1,
          },
        ],
        totalPrice: 200,
      };
      const action = {
        type: SUBSTRACT_PRODUCT_ITEM,
        payload: { itemId: 5, itemList },
      };
      const newState = shoppingCartReducer(initialState, action);
      expect(newState.itemsInShoppingCart.length).toEqual(0);
      expect(newState.totalPrice).toEqual(0);
    });

    it("Should substract quantity from existing product and update accumulated price", () => {
      initialState = {
        itemsInShoppingCart: [
          {
            itemId: 5,
            quantity: 2,
          },
        ],
        totalPrice: 400,
      };
      const action = {
        type: SUBSTRACT_PRODUCT_ITEM,
        payload: { itemId: 5, itemList },
      };
      const newState = shoppingCartReducer(initialState, action);
      expect(newState.itemsInShoppingCart.length).toEqual(1);
      expect(newState.itemsInShoppingCart[0].quantity).toEqual(1);
      expect(newState.totalPrice).toEqual(200);
    });

    it("Should not modify state if an unexisting itemId is passed in", () => {
      initialState = {
        itemsInShoppingCart: [
          {
            itemId: 5,
            quantity: 2,
          },
        ],
        totalPrice: 400,
      };
      const action = {
        type: SUBSTRACT_PRODUCT_ITEM,
        payload: { itemId: 12, itemList },
      };
      const newState = shoppingCartReducer(initialState, action);
      expect(newState.itemsInShoppingCart.length).toEqual(1);
      expect(newState.totalPrice).toEqual(400);
    });
  });
  describe("Tests for removing all products from the shopping cart and updating total price", () => {
    it("Should reset the shopping cart and price", () => {
      initialState = {
        itemsInShoppingCart: [
          {
            itemId: 5,
            quantity: 2,
          },
        ],
        totalPrice: 400,
      };
      const action = {
        type: REMOVE_ALL_SHOPING_CART_ITEMS,
      };
      const newState = shoppingCartReducer(initialState, action);
      expect(newState.itemsInShoppingCart.length).toEqual(0);
      expect(newState.totalPrice).toEqual(0);
    });
  });

  describe("Tests for loading shopping cart with preloaded data", () => {
    it("Should restore shopping cart state", () => {
      const action = {
        type: LOAD_SHOPPING_CART,
        payload: {
          storedItems: JSON.stringify(itemList),
          storedPrice: 300
        }
      };
      const newState = shoppingCartReducer(initialState, action);
      expect(newState.itemsInShoppingCart.length).toEqual(2);
      expect(newState.totalPrice).toEqual(300);
    });
  });
});
