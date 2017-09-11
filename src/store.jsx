import { createStore, applyMiddleware } from "redux";
import { browserHistory } from "react-router";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducers } from "./reducers";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";

let middlewares = [];

middlewares.push(thunk, routerMiddleware(browserHistory));

const composeEnhancers = composeWithDevTools({
    name: "react-test"
});

const store = createStore(reducers, composeEnhancers(
    applyMiddleware(...middlewares),
));
const history = syncHistoryWithStore(browserHistory, store);

export { store, history};
