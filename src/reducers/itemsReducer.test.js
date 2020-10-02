import { loadItems, setItemInPreview } from "../actions/itemsActions";
import itemsReducer from "./itemsReducer";

describe("Items Reducer tests", () => {
  const mockItemList = [
    { name: "item 1" },
    { name: "item 2" },
    { name: "item 3" },
    { name: "item 4" },
  ];

  const initialState = { itemIdInPreview: null, itemList: [] };
  it("Should load items", () => {
    const action = loadItems(mockItemList);
    const newState = itemsReducer(initialState, action);
    expect(newState.itemList).toEqual(mockItemList);
  });
  it("Should set item in preview", () => {
    const action = setItemInPreview(1);
    const newState = itemsReducer(initialState, action);
    expect(newState.itemIdInPreview).toEqual(1);
  });
  it("Should remove item if same id as the one from parameter", () => {
    initialState.itemIdInPreview = 1;
    const action = setItemInPreview(1);
    const newState = itemsReducer(initialState, action);
    expect(newState.itemIdInPreview).toEqual(null);
  });
});
