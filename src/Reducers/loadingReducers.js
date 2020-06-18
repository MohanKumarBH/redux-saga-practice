import { IMAGES } from '../constants/index'

const loadingReducers = (state = false, action) => {
    switch (action.type) {
        case IMAGES.LOAD:
            return true
        case IMAGES.LOAD_FAIL:
            return false
        case IMAGES.LOAD_SUCESS:
            return true
        default:
            return state
    }
}

export default loadingReducers
