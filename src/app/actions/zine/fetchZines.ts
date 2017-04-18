import createFetchAction from 'app/utils/actions/createFetchAction'
import { requestFetchZines } from 'app/webAPI/zine'


export type TFetchZines = (query?:any) => Action.CreatorReturnTypes
export const fetchZines:TFetchZines = (query = {}) =>
  createFetchAction('ZINES:FETCH', requestFetchZines, query)()

export default fetchZines
