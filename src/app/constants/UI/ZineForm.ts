import { Record } from 'immutable'


const ZineFormRecord = Record({
  currentZine: ''
})

export class ZineForm extends ZineFormRecord {
  currentZine: string
}

interface IZineForm {
  currentZine: string
}

type TcreateZineForm = (zineForm ?: Partial<IZineForm>) => ZineForm
export const createZineForm:TcreateZineForm = zineForm => new ZineForm(zineForm)
