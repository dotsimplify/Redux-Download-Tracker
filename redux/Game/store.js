import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import Reducer from "./reducer";
const store = createStore(
  Reducer,
  composeWithDevTools(applyMiddleware(logger))
);
export default store;
