import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { ADD_PRODUCT_ITEM, SUBSTRACT_PRODUCT_ITEM } from "./actionTypes";
import { addProductUpdatePrice, substractProductUpdatePrice } from "./shoppingCartActions";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Shopping Cart actions tests", () => {
  let itemList = [
    { id: 5, price: 200 },
    { id: 2, price: 50 },
  ];
  it("Should dispatch add product action with added payload", () => {
    const store = mockStore({ items: { itemList } });
    const itemId = 2;
    store.dispatch(addProductUpdatePrice(itemId));
    const actions = store.getActions();
    expect(actions[0].type).toEqual(ADD_PRODUCT_ITEM);
    expect(actions[0].payload.itemId).toEqual(itemId);
    expect(actions[0].payload.itemList).toEqual(itemList);
  });
  it("Should dispatch substract product action with added payload", () => {
    const store = mockStore({ items: { itemList } });
    const itemId = 2;
    store.dispatch(substractProductUpdatePrice(itemId));
    const actions = store.getActions();
    expect(actions[0].type).toEqual(SUBSTRACT_PRODUCT_ITEM);
    expect(actions[0].payload.itemId).toEqual(itemId);
    expect(actions[0].payload.itemList).toEqual(itemList);
  });
});
