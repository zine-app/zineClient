import { Record } from 'immutable'


const ModalRecord = Record({
  shouldDisplay: false,
  transition: ''
})

export class Modal extends ModalRecord {
  shouldDisplay: boolean
  transition: string
}

interface IModal {
  shouldDisplay: boolean
  transition: string
}

type TCreateModal = (appLoader ?: Partial<IModal>) => Modal
export const createModal:TCreateModal = options => new Modal(options)
