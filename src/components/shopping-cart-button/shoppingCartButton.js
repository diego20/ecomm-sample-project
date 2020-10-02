import React from "react";
import styles from "./shoppingCartButton.module.scss";
import { connect } from "react-redux";
import ShoppingCartIcon from "../../utils/icons/shoppingCartIcon";
import { setCheckoutView } from "../../actions/checkoutActions";
import Button from "../../utils/button/button";
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
        isActive={isInCheckout}
        icon={
          <ShoppingCartIcon
            width={"14px"}
            className={
              isInCheckout ? styles["fill-base-color"] : styles["fill-white"]
            }
          />
        }
        buttonText={currencyFormatter(totalPrice)}
        clickEvent={() => setShoppingCartView(!isInCheckout)}
        helperAction={() => removeShoppingCart(!isInCheckout)}
      />
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
