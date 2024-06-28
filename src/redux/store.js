import { createStore, applyMiddleware } from "redux";
import { thunk, withExtraArgument } from "redux-thunk";

import rootReducer from "./reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,

  composeWithDevTools(applyMiddleware(withExtraArgument(thunk)))
);

export default store;
