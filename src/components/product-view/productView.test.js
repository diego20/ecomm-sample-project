import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import ProductView from "./productView";
import { CHOOSE_PRODUCT } from "../../constants/constants";
import PlusMinusWidget from "../../utils/reusableComponents/plus-minus-widget/plusMinusWidget";

const mockStore = configureMockStore([thunk]);

describe("Tests for the product view component", () => {
  it("Should render item in preview", () => {
    const itemList = [
      { id: 5, price: 200 },
      { id: 2, price: 50 },
    ];
    const itemIdInPreview = 2;
    const itemsInShoppingCart = [{ itemId: 5, quantity: 2 }];
    const store = mockStore({
      items: { itemList, itemIdInPreview },
      shoppingCart: { itemsInShoppingCart },
    });

    const wrapper = mount(
      <Provider store={store}>
        <ProductView />
      </Provider>
    );
    const elements = wrapper.find("img.large-image-element");
    expect(elements).toHaveLength(1);
  });

  it("Should not render item in preview", () => {
    const itemList = [
      { id: 5, price: 200 },
      { id: 2, price: 50 },
    ];
    const itemIdInPreview = null;
    const itemsInShoppingCart = [{ itemId: 5, quantity: 2 }];
    const store = mockStore({
      items: { itemList, itemIdInPreview },
      shoppingCart: { itemsInShoppingCart },
    });

    const wrapper = mount(
      <Provider store={store}>
        <ProductView />
      </Provider>
    );
    const element = wrapper.find("img.large-image-element");
    const text = wrapper.find("p.paragraph").text();
    expect(element).toEqual({});
    expect(text).toEqual(CHOOSE_PRODUCT);
  });

  it("Should render child component", () => {
    const itemList = [
      { id: 5, price: 200 },
      { id: 2, price: 50 },
    ];
    const itemIdInPreview = 2;
    const itemsInShoppingCart = [{ itemId: 5, quantity: 2 }];
    const store = mockStore({
      items: { itemList, itemIdInPreview },
      shoppingCart: { itemsInShoppingCart },
    });

    const wrapper = mount(
      <Provider store={store}>
        <ProductView />
      </Provider>
    );
    const element = wrapper.find(PlusMinusWidget);
    expect(element).toHaveLength(1);
  });
});
