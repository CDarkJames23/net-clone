import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducer.js";

const store = createStore(rootReducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));

export default store;

// export default (initialState) => {
//   const middleware = [thunk];

//   const composeEnhancers =
//     typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//       ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
//       : compose;

//   const enhancer = composeEnhancers(applyMiddleware(...middleware));

//   const store = createStore(rootReducer, initialState || {}, enhancer);

//   return store;
// };
