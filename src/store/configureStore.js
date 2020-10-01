import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from 'redux-thunk';
import initialState from "../reducers/initialState";

const configureStore = () => {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(thunk)),
  );
  return store;
};

export default configureStore;
