import React from "react";
import "./productView.scss";
import { connect } from "react-redux";
import { CHOOSE_PRODUCT, PRODUCT } from "../../constants/constants";
import currencyFormatter from "../../utils/currencyFormatter";
import PlusMinusWidget from "../../utils/reusableComponents/plus-minus-widget/plusMinusWidget";
import {
  addProductUpdatePrice,
  substractProductUpdatePrice,
} from "../../actions/shoppingCartActions";

const ProductView = ({
  itemIdInPreview,
  itemList,
  addProductUpdatePrice,
  substractProductUpdatePrice,
  itemsInShoppingCart,
}) => {
  const itemInPreview = itemList.find((item) => item.id === itemIdInPreview);
  const itemInShoppingCart = itemsInShoppingCart.find(
    (elem) => elem.itemId === itemIdInPreview
  );
  let itemQuantity = 0;
  if (itemInShoppingCart) itemQuantity = itemInShoppingCart.quantity;

  const onSubstractEvent = (itemId) => {
    substractProductUpdatePrice(itemId);
  };
  const onAddEvent = (itemId) => {
    addProductUpdatePrice(itemId);
  };

  return (
    <>
      <p className={"no-margin-bottom"}>{PRODUCT}</p>
      <hr />
      <div className="row">
        {itemInPreview ? (
          <>
            <div className="col-12 large-image-box">
              <img
                alt="product"
                src={itemInPreview.image}
                className={"large-image-element"}
              />
              <span className="item-count">{itemQuantity}</span>
            </div>
            <div className="row">
              <div className="col-12 flex justify-content-sb align-items-bottom">
                <p id="item-price" className="no-margin-bottom">
                  {itemInPreview.name} &#8226;{" "}
                  {currencyFormatter(itemInPreview.price)}
                </p>
                <PlusMinusWidget
                  substractAction={() => onSubstractEvent(itemInPreview.id)}
                  addAction={() => onAddEvent(itemInPreview.id)}
                />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-12">
                <p className="paragraph no-margins dark-gray">
                  {itemInPreview.description}
                </p>
              </div>
            </div>
          </>
        ) : (
          <p className="paragraph dark-gray">
            {CHOOSE_PRODUCT}
          </p>
        )}
      </div>
    </>
  );
};

const mapStateToProps = ({
  items: { itemIdInPreview, itemList },
  shoppingCart: { itemsInShoppingCart },
}) => ({
  itemIdInPreview,
  itemList,
  itemsInShoppingCart,
});
const actionCreators = {
  addProductUpdatePrice,
  substractProductUpdatePrice,
};
export default connect(mapStateToProps, actionCreators)(ProductView);
