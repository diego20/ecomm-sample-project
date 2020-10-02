import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import ProductGrid from "./productGrid";
import {
  SET_CHECKOUT,
  SET_ITEM_ID_IN_PREVIEW,
} from "../../actions/actionTypes";

const mockStore = configureMockStore([thunk]);

describe("Tests for the product grid component", () => {
  it("Should get Item quantity", () => {
    const itemList = [
      { id: 5, price: 200 },
      { id: 2, price: 50 },
    ];
    const itemsInShoppingCart = [{ itemId: 5, quantity: 2 }];
    const store = mockStore({
      items: { itemList },
      shoppingCart: { itemsInShoppingCart },
    });

    const wrapper = mount(
      <Provider store={store}>
        <ProductGrid />
      </Provider>
    );
    const elements = wrapper.find(".image-box");
    expect(elements).toHaveLength(2);
  });

  it("Should mark items as selected", () => {
    const itemList = [
      { id: 5, price: 200 },
      { id: 2, price: 50 },
    ];
    const itemsInShoppingCart = [
      { itemId: 5, quantity: 2 },
      { itemId: 2, quantity: 1 },
    ];
    const store = mockStore({
      items: { itemList },
      shoppingCart: { itemsInShoppingCart },
    });

    const wrapper = mount(
      <Provider store={store}>
        <ProductGrid />
      </Provider>
    );
    const elements = wrapper.find(".selected");
    expect(elements).toHaveLength(2);
  });

  it("Should not mark any item as selected", () => {
    const itemList = [
      { id: 5, price: 200 },
      { id: 2, price: 50 },
    ];
    const itemsInShoppingCart = [
      { itemId: 1, quantity: 2 },
      { itemId: 3, quantity: 1 },
    ];
    const store = mockStore({
      items: { itemList },
      shoppingCart: { itemsInShoppingCart },
    });

    const wrapper = mount(
      <Provider store={store}>
        <ProductGrid />
      </Provider>
    );
    const elements = wrapper.find(".selected");
    expect(elements).toHaveLength(0);
  });

  it("Should call redux effects", () => {
    const itemList = [
      { id: 5, price: 200 },
      { id: 2, price: 50 },
    ];
    const itemsInShoppingCart = [
      { itemId: 1, quantity: 2 },
      { itemId: 3, quantity: 1 },
    ];
    const store = mockStore({
      items: { itemList },
      shoppingCart: { itemsInShoppingCart },
    });

    const wrapper = mount(
      <Provider store={store}>
        <ProductGrid />
      </Provider>
    );

    wrapper.find(".image-box").first().simulate("click");
    const actions = store.getActions();
    expect(actions[0].type).toEqual(SET_ITEM_ID_IN_PREVIEW);
    expect(actions[1].type).toEqual(SET_CHECKOUT);
  });
});
