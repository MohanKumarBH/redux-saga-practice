import { takeEvery, select, call, put } from "redux-saga/effects"
import { IMAGES } from "../constants"
import fetchImages from "../api/index"

import { loadImageSucess, loadImageFail } from "../Actions/index"

const getPage = state => state.nextPage;

function* handleImagesLoad() {
	try {
		const page = yield select(getPage);
		const images = yield call(fetchImages, page);
		yield put(loadImageSucess(images));
	} catch (error) {
		yield put(loadImageFail(error.toString()))
	}
}

export default function* watchImagesLoad() {
	yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

