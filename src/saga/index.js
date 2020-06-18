// import { takeEvery, put } from "redux-saga/effects"
// 
// import { IMAGES } from "../constants";
// 
// 
// function* handelImagesLoad() {
// 
// console.log("load images");
// console.log("from worker");
// console.log(put({ type: "ACTION_WORKER_SAGA" }))
// yield put({ type: "ACTION_WORKER_SAGA" });
// }
// watcher saga
// function* rootSaga() {
// yield takeEvery(IMAGES.LOAD, handelImagesLoad)
// }
// watcher saga invoke-> worker saga

import imagesSaga from "./imagesSaga"
export default imagesSaga;