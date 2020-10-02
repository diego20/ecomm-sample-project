import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import ShoppingCart from "./shoppingCart";

const mockStore = configureMockStore([thunk]);

beforeEach(() => {
  const div = document.createElement("div");
  div.setAttribute("id", "container");
  document.body.appendChild(div);
});

afterEach(() => {
  const div = document.getElementById("container");
  if (div) {
    document.body.removeChild(div);
  }
});

describe("Tests for the shopping cart container component", () => {
  it("Should render items", () => {
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
        <ShoppingCart />
      </Provider>,
      { attachTo: document.getElementById("container") }
    );
    const images = wrapper.find("img#shopping-image");
    expect(images).toHaveLength(2);
  });

  it("Should have form where Wompi will load", () => {
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
        <ShoppingCart />
      </Provider>,
      { attachTo: document.getElementById("container") }
    );
    const wompi = wrapper.find("form#wompi-widget");
    expect(wompi).toHaveLength(1);
  });
});
