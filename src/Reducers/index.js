import { combineReducers } from 'redux'

import imagesReducers from './imagesReducers'
import loadingReducers from './loadingReducers'
import errorReducers from './errorReducers'
import pageReducers from "./pageReducers"

const rootReducers = combineReducers({
    isLoading: loadingReducers,
    images: imagesReducers,
    error: errorReducers,
    nextPage: pageReducers
})

export default rootReducers
