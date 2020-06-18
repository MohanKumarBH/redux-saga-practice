import { IMAGES } from '../constants/index'

const errorReducers = (state = null, action) => {
    switch (action.type) {
        case IMAGES.LOAD_FAIL:
            return action.error
        case IMAGES.LOAD_SUCESS:
            return null
        default:
            return state
    }
}

export default errorReducers
