import React from "react";
import { shallow } from "enzyme";
import Header from "./header";
import LogoIcon from "../../utils/icons/logoIcon";
import shoppingCartButton from "../shopping-cart-button/shoppingCartButton";

describe('Main app component tests', () => {
  test("renders store container component", () => {
    const wrapper = shallow(<Header />);
    const store = wrapper.find(LogoIcon);
    expect(store).toHaveLength(1);
  });

  test("renders header component", () => {
    const wrapper = shallow(<Header />);
    const header = wrapper.find(shoppingCartButton);
    expect(header).toHaveLength(1);
  });
});
