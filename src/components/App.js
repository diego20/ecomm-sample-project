import React, { useEffect } from "react";
import "./App.scss";
import Header from "./header/header";
import configureStore from "../store/configureStore";
import { Provider } from "react-redux";
import StoreContainer from "./store-container/storeContainer";
import { loadItems } from "../actions/itemsActions";
import { loadShoppingCart } from "../actions/shoppingCartActions";
import { TestData } from "../utils/mockData";

const Store = configureStore();

function App() {

  useEffect(() => {
    Store.dispatch(loadItems(TestData));
    Store.dispatch(loadShoppingCart());
  }, []);

  return (
    <Provider store={Store}>
      <main className="container">
        <div className="main-view">
          <Header />
          <StoreContainer />
        </div>
        <small className="display-block center mt-1">
          Icons made by{" "}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            {" "}
            www.flaticon.com
          </a>
        </small>
      </main>
    </Provider>
  );
}

export default App;
