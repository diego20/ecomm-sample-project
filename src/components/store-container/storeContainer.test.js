import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import ProductGrid from "../product-grid/productGrid";
import StoreContainer from "./storeContainer";
import ProductView from "../product-view/productView";
import ShoppingCart from "../shopping-cart/shoppingCart";

const mockStore = configureMockStore([thunk]);

beforeAll(() => {
  const div = document.createElement("div");
  div.setAttribute("id", "container");
  document.body.appendChild(div);
});

afterAll(() => {
  const div = document.getElementById("container");
  if (div) {
    document.body.removeChild(div);
  }
});

describe("Tests for the store container component", () => {
  it("Should render correct child components", () => {
    const itemList = [
      { id: 5, price: 200 },
      { id: 2, price: 50 },
    ];
    const itemsInShoppingCart = [{ itemId: 5, quantity: 2 }];
    const store = mockStore({
      checkout: { isInCheckout: false },
      items: { itemList },
      shoppingCart: { itemsInShoppingCart },
    });

    const wrapper = mount(
      <Provider store={store}>
        <StoreContainer />
      </Provider>
    );
    const grid = wrapper.find(ProductGrid);
    const view = wrapper.find(ProductView);
    expect(grid).toHaveLength(1);
    expect(view).toHaveLength(1);
  });

  it("Should render correct child components when checkout is true", () => {
    const itemList = [
      { id: 5, price: 200 },
      { id: 2, price: 50 },
    ];
    const itemsInShoppingCart = [{ itemId: 5, quantity: 2 }];
    const store = mockStore({
      checkout: { isInCheckout: true },
      items: { itemList },
      shoppingCart: { itemsInShoppingCart },
    });

    const wrapper = mount(
      <Provider store={store}>
        <StoreContainer />
      </Provider>, { attachTo: document.getElementById("container") }
    );
    const grid = wrapper.find(ProductGrid);
    const view = wrapper.find(ShoppingCart);
    expect(grid).toHaveLength(1);
    expect(view).toHaveLength(1);
  });
});
