import { Record } from 'immutable'


const ModalRecord = Record({
  name: '',
  shouldDisplay: false,
  transition: '',
  props: null,
  theme: 'black'
})

export class Modal extends ModalRecord {
  name: string
  shouldDisplay: boolean
  transition: string
  props: any
  theme: string
}

interface IModal {
  name: string
  shouldDisplay: boolean
  transition: string
  props: any
  theme: string
}

type TCreateModal = (appLoader ?: Partial<IModal>) => Modal
export const createModal:TCreateModal = options => new Modal(options)
