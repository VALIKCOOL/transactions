import React from "react";
import { Router, Route, IndexRedirect, IndexRoute } from "react-router";
import { history } from "./store";

import App from "./modules/App";
import StoreTransactions from "./modules/Store/StoreTransactions";

// build the router
const router = (
    <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={StoreTransactions} />
            <IndexRedirect to="/store" />
            <Route path="store" component={StoreTransactions} />
        </Route>
    </Router>
);

// export
export { router };
