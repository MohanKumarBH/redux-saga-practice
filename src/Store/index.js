import { createStore, applyMiddleware, compose } from 'redux'
import rootReducers from '../Reducers'
import createSagaMiddleware from 'redux-saga'

import imagesSaga from "../saga/index";

const configStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const devTools = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : null
    const store = createStore(
        rootReducers,
        compose(
            applyMiddleware(sagaMiddleware),
            devTools
        ),
    )
    sagaMiddleware.run(imagesSaga);
    return store
}

export default configStore
