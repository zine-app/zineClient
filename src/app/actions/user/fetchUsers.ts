import { requestGetUsers } from 'app/webAPI/user'
import createFetchAction from 'app/utils/actions/createFetchAction'


const fetchUsers = query => (dispatch, getState):Promise<IAction> =>
  dispatch(createFetchAction('USERS:FETCH', requestGetUsers, query)())

export default fetchUsers
