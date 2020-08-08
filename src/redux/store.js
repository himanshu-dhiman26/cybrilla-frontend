import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import insuranceReducer from "./reducers/insurance-calculator/reducer";

export default function configureStore(preloadedState) {
  const store = createStore(
    insuranceReducer,
    preloadedState,
    composeWithDevTools()
  );
  return store;
}
