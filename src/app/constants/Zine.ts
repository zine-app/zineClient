import { Record } from 'immutable'


const ZineRecord = Record({
  id: '',
  ownerId: '',
  name: '',
  description: '',
  categories: '',
  iconImageURL: '',
  headerImageURL: '',
  published: ''
})

export class Zine extends ZineRecord {
  id: string
  ownerId: string
  name: string
  description: string
  categories: string
  iconImageURL: string
  headerImageURL: string
  published: boolean
}

export const createZine = (zine ?: Partial<Constant.IZine>):Zine => new Zine(zine)
