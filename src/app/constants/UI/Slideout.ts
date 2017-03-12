import { Record } from 'immutable'


const SlideoutRecord = Record({
  isOpen: false,
  cardName: 'default'
})

export class Slideout extends SlideoutRecord {
  isOpen: boolean
  cardName: string
}

interface ISlideout {
  isOpen: boolean
  cardName: string
}

type TcreateSlideout = (appLoader ?: Partial<ISlideout>) => Slideout
export const createSlideout:TcreateSlideout = (slideout) => new Slideout(slideout)
