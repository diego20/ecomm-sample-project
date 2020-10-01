import React from "react";
import styles from "./shoppingCartButton.module.scss";
import { connect } from "react-redux";
import ShoppingCartIcon from "../../utils/icons/shoppingCartIcon";
import { setCheckoutView } from "../../actions/checkoutActions";
import Button from "../../utils/reusableComponents/button/button";
import { setItemInPreview } from "../../actions/itemsActions";
import { removeAllShopingCartItems } from "../../actions/shoppingCartActions";
import currencyFormatter from "../../utils/currencyFormatter";

const ShoppingCart = ({
  isInCheckout,
  totalPrice,
  setCheckoutView,
  setItemInPreview,
  removeAllShopingCartItems,
}) => {
  const setShoppingCartView = (triggerCheckoutView) => {
    setCheckoutView(triggerCheckoutView);
    setItemInPreview(null);
  };

  const removeShoppingCart = (triggerCheckoutView) => {
    removeAllShopingCartItems();
    setCheckoutView(triggerCheckoutView);
  };

  return (
    <div className="flex align-items-center">
      <Button
        buttonType={"info"}
        icon={<ShoppingCartIcon width={"14px"} fill={"white"} />}
        buttonText={currencyFormatter(totalPrice)}
        clickEvent={() => setShoppingCartView(!isInCheckout)}
      />
      <span
        className={`${styles["cross-button"]} ${
          isInCheckout ? "" : styles["hidden"]
        }`}
        onClick={() => removeShoppingCart(!isInCheckout)}
      >
        X
      </span>
    </div>
  );
};

const mapStateToProps = ({
  checkout: { isInCheckout },
  shoppingCart: { totalPrice },
}) => ({
  isInCheckout,
  totalPrice,
});

const actionCreators = {
  setCheckoutView,
  setItemInPreview,
  removeAllShopingCartItems,
};
export default connect(mapStateToProps, actionCreators)(ShoppingCart);
