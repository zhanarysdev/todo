import {
    createStore,
    applyMiddleware,
} from 'redux'
import {
    composeWithDevTools
} from 'redux-devtools-extension/developmentOnly';
import {
    createLogger
} from 'redux-logger';

const logger = createLogger({
    collapsed: true,
    diff: true
});
import thunk from 'redux-thunk';
import {
    reducers
} from './reducers'
export function configureStore(initialState = {
    page: 1
}) {
    const store = createStore(
        reducers,
        initialState,
        composeWithDevTools(
            /* logger must be the last middleware in chain to log actions */
            applyMiddleware(thunk, logger)
        )
    )
    return store;
};

export const store = configureStore();