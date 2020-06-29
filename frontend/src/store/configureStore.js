import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../ducks';
import createMiddleware from './middleware/clientMiddleware';


export default function configureStore(initialState, client, helpersConfig) {
    let middleware = [createMiddleware(client), thunk.withExtraArgument(helpersConfig)];

    let enhancer;

    if (env === 'development') {
        const { logger } = require("redux-logger");
        middleware.push(logger);

        // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
        let devToolsExtension = f => f;
        if (process.env.BROWSER && window.devToolsExtension) {
            devToolsExtension = window.devToolsExtension();
        }

        enhancer = compose(
            applyMiddleware(...middleware),
            devToolsExtension,
    );
    } else {
        enhancer = applyMiddleware(...middleware);
    }

    // See https://github.com/rackt/redux/releases/tag/v3.1.0
    const store = createStore(rootReducer, initialState, enhancer);
    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if (env === 'development' && module.hot) {
        module.hot.accept('../ducks', () =>
        // eslint-disable-next-line global-require
        store.replaceReducer(require('../ducks').default),
    );
    }

    return store;
}