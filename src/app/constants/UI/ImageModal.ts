import { Record } from 'immutable'


const ImageModalRecord = Record({
  shouldDisplay: false
})

export class ImageModal extends ImageModalRecord {
  shouldDisplay: boolean
}

interface IImageModal {
  shouldDisplay: boolean
}

type TCreateImageModal = (appLoader ?: Partial<IImageModal>) => ImageModal
export const createImageModal:TCreateImageModal = (postModal) => new ImageModal(postModal)
