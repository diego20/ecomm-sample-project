import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import storeContainer from "./store-container/storeContainer";
import Header from "./header/header";

describe('Main app component tests', () => {
  test("renders store container component", () => {
    const wrapper = shallow(<App />);
    const store = wrapper.find(storeContainer);

    expect(store).toHaveLength(1);
  });

  test("renders header component", () => {
    const wrapper = shallow(<App />);
    const header = wrapper.find(Header);
    expect(header).toHaveLength(1);
  });
});
