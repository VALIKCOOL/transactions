import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { store } from "./store";
import { router } from "./router";

ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider>
    , document.getElementById('root'));

registerServiceWorker();
