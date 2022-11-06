import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducer/rootReducer";

export default function configureStore() {
  const middlewareEnhancer = applyMiddleware(thunk);
  const composedEnhancers = composeWithDevTools(middlewareEnhancer);
  return createStore(rootReducer, undefined, composedEnhancers);
}
