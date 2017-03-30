import { Record } from 'immutable'


const MeRecord = Record({
  userId: ''
})

export class Me extends MeRecord {
  userId: string
}

interface IMe {
  userId: string
}

export const createMe = (me?:Partial<IMe>) => new Me(me)
