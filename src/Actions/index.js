import { IMAGES } from '../constants/index'

const laodImage = () => ({
    type: IMAGES.LOAD,
})

const loadImageSucess = images => ({
    type: IMAGES.LOAD_SUCESS,
    images,
})

const loadImageFail = error => ({
    type: IMAGES.LOAD_FAIL,
    error,
})

export { laodImage, loadImageSucess, loadImageFail }
