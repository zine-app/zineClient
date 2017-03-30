import createFetchAction from 'app/utils/actions/createFetchAction'
import { requestFetchMyZines } from 'app/webAPI/zine'


export type TFetchMyZines = (query?:any) => Action.CreatorReturnTypes
export const fetchMyZines:TFetchMyZines = (query = {}) =>
  createFetchAction('ZINES:FETCH', requestFetchMyZines, query)()

export default fetchMyZines
