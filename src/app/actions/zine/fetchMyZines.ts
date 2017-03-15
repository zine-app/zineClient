import createFetchAction from 'app/utils/actions/createFetchAction'
import { requestFetchMyZines } from 'app/webAPI/zine'


export type TFetchMyZines = () => Action.CreatorReturnTypes
export const fetchMyZines:TFetchMyZines = () => createFetchAction('ZINE:FETCH', requestFetchMyZines)()

export default fetchMyZines
