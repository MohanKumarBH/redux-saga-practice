import { IMAGES } from '../constants/index'

const imagesReducers = (state = [], action) => {
    if (action.type === IMAGES.LOAD_SUCESS) {
        return [...state, ...action.images]
    }
    return state
}

export default imagesReducers
