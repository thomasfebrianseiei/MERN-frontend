import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const inititalState = {};

const store = createStore(
        rootReducer, 
        inititalState, 
        compose(applyMiddleware(thunk), 
                window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()));

export default store;

//we have used redux-thunk middleware to deal with AJAX or network request through redux.

// Also, I have used the compose function. We have used a chrome extension to display our store data in that extension. So we have connected our Redux application to that extension.