import { requestGetMe } from 'app/webAPI/user'
import createFetchAction from 'app/utils/actions/createFetchAction'


const fetchMe = () => (dispatch, getState):Promise<IAction> =>
  dispatch(createFetchAction('AUTH:ME', requestGetMe)())

export default fetchMe
