import createFetchAction from 'app/utils/actions/createFetchAction'
import { requestPostZine } from 'app/webAPI/zine'


export type TSaveZine = (user:Partial<Constant.IZine>) => Action.CreatorReturnTypes
export const saveZine:TSaveZine = zine => createFetchAction('ZINE:SAVE', requestPostZine, zine)()

export default saveZine
