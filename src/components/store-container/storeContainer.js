import React from "react";
import { connect } from "react-redux";
import ProductGrid from "../product-grid/productGrid";
import ProductView from "../product-view/productView";
import ShoppingCart from "../shopping-cart/shoppingCart";

import "./storeContainer.scss";

const StoreContainer = ({ isInCheckout }) => (
  <div className="row">
    <div className="col-7">
      <ProductGrid />
    </div>
    <div className="col-5">
      {isInCheckout ? <ShoppingCart /> : <ProductView />}
    </div>
  </div>
);

const mapStateToProps = ({ checkout: {isInCheckout} }) => ({
  isInCheckout,
});

export default connect(mapStateToProps)(StoreContainer);
