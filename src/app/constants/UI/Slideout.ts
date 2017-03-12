import { Record } from 'immutable'


const SlideoutRecord = Record({
  isOpen: false,
})

export class Slideout extends SlideoutRecord {
  isOpen: boolean
}

interface ISlideout {
  isOpen: boolean
}

type TcreateSlideout = (appLoader ?: Partial<ISlideout>) => Slideout
export const createSlideout:TcreateSlideout = (slideout) => new Slideout(slideout)
