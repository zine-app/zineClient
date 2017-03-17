import createFetchAction from 'app/utils/actions/createFetchAction'
import { requestDeleteZine } from 'app/webAPI/zine'

export type TdeleteZine = (zine:any) => Action.CreatorReturnTypes
export const deleteZine:TdeleteZine = zine =>
  createFetchAction(
    'ZINE:DELETE',
    requestDeleteZine,
    zine
  )(undefined, () => ({ id: zine.id }))

export default deleteZine
