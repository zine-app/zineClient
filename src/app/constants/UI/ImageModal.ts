import { Record } from 'immutable'


const ImageModalRecord = Record({
  shouldDisplay: false,
  transition: ''
})

export class ImageModal extends ImageModalRecord {
  shouldDisplay: boolean
  transition: string
}

interface IImageModal {
  shouldDisplay: boolean
  transition: string
}

type TCreateImageModal = (appLoader ?: Partial<IImageModal>) => ImageModal
export const createImageModal:TCreateImageModal = (postModal) => new ImageModal(postModal)
