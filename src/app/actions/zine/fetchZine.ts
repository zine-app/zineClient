import createFetchAction from 'app/utils/actions/createFetchAction'
import { requestFetchZine } from 'app/webAPI/zine'


export type TFetchZine = (query?:any) => Action.CreatorReturnTypes
export const fetchZine:TFetchZine = (query = {}) =>
  createFetchAction('ZINE:FETCH', requestFetchZine, query)()

export default fetchZine
