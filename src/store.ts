import {applyMiddleware, combineReducers, createStore, Middleware, Store} from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares: Middleware[] = [sagaMiddleware];

const store: Store = createStore(
    combineReducers({...reducers}),
    applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);

export {store};
