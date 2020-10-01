import React from "react";
import { STORE } from "../../constants/constants";
import { connect } from "react-redux";
import "./productGrid.scss";
import { setItemInPreview } from "../../actions/itemsActions";
import { setCheckoutView } from "../../actions/checkoutActions";

const ProductGrid = ({
  itemList,
  itemIdInPreview,
  itemsInShoppingCart,
  setItemInPreview,
  setCheckoutView
}) => {
  const getItemQuantity = (id) => {
    const itemInShoppingCart = itemsInShoppingCart.find(
      (elem) => elem.itemId === id
    );
    if (itemInShoppingCart) return itemInShoppingCart.quantity;

    const isInPreview = !!(itemIdInPreview === id);
    if (isInPreview) return 0;
    else return null;
  };

  const onElementClick = (id) => {
    setItemInPreview(id);
    setCheckoutView(false);
  };

  return (
    <>
      <p className={"no-margin-bottom"}>{STORE}</p>
      <hr />
      <div className="row">
        {itemList.map((element, index) => {
          const itemQuantity = getItemQuantity(element.id);
          return (
            <div
              key={index}
              className={`col-4-sm image-box ${
                itemQuantity !== null ? "selected" : ""
              }`}
              onClick={() => onElementClick(element.id)}
            >
              <img
                alt={element.name}
                src={element.image}
                className={"image-element"}
              />
              {itemQuantity !== null && (
                <span className={"item-count"}>{itemQuantity}</span>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};


const mapStateToProps = ({
  items: { itemList, itemIdInPreview },
  shoppingCart: { itemsInShoppingCart },
}) => ({
  itemList,
  itemIdInPreview,
  itemsInShoppingCart,
});
const actionCreators = {
  setItemInPreview,
  setCheckoutView
};
export default connect(mapStateToProps, actionCreators)(ProductGrid);
