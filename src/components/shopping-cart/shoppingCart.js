import React, { useEffect } from "react";
import { SHOPPING_CART } from "../../constants/constants";
import { connect } from "react-redux";
import styles from "./shoppingCart.module.scss";
import "../../style-helpers/baseStyles.scss";
import currencyFormatter from "../../utils/currencyFormatter";

const ShoppingCart = ({ itemList, shoppingCart }) => {
  const getItemFromData = (id) => itemList.find((elem) => elem.id === id);

  useEffect(() => {
    const script = document.createElement("script");
    script.id = "wompi-button";
    script.src = "https://checkout.wompi.co/widget.js";
    script.setAttribute("data-render", "button");
    script.setAttribute(
      "data-public-key",
      "pub_test_STx2lgsc9Kulcp4CljOgME4DE2VOKNOl"
    );
    script.setAttribute("data-currency", "COP");
    script.setAttribute("data-amount-in-cents", shoppingCart.totalPrice * 100);
    script.setAttribute("data-reference", "4XMPGKWWPKWQ");
    script.setAttribute("data-redirect-url", window.location.href);
    document.getElementById("wompi-widget").appendChild(script);
  }, [shoppingCart.totalPrice]);

  return (
    <>
      <p className={"no-margin-bottom"}>{SHOPPING_CART}</p>
      <hr />
      <div className={`${styles["limit-height"]}`}>
        {shoppingCart.itemsInShoppingCart.map((item) => {
          const completeItem = getItemFromData(item.itemId);
          return (
            completeItem && (
              <div key={item.itemId} className="row">
                <div className="col-12 flex align-items-center">
                  <span className={styles["circled-number"]}>
                    {item.quantity}
                  </span>
                  <img
                    id="shopping-image"
                    alt="product-large"
                    src={completeItem.image}
                    className={`ml-2 ${styles["image-max-height"]}`}
                  />
                </div>
                <hr className={"no-margin-bottom"} />
              </div>
            )
          );
        })}
      </div>
      <div className="col-12 right">
        <p className={`no-margins ${styles["price-tag"]} dark-gray`}>Total: </p>
        <p className={`${styles["price-tag"]}`}>
          {currencyFormatter(shoppingCart.totalPrice)}
        </p>
      </div>
      <div>
        <form id="wompi-widget"></form>
      </div>
    </>
  );
};

const mapStateToProps = ({ items: { itemList }, shoppingCart }) => ({
  itemList,
  shoppingCart,
});
export default connect(mapStateToProps)(ShoppingCart);
