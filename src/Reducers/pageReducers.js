import { IMAGES } from '../constants/index'

const pageReducers = (state = 1, action) => {
	switch (action.type) {
		case IMAGES.LOAD_SUCESS:
			return state + 1;
		default:
			return state;
	}
}

export default pageReducers;
