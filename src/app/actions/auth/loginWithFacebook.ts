import * as facebook from 'app/webAPI/facebook'
import createFetchAction from 'app/utils/actions/createFetchAction'


const loginWithFacebook = () => (dispatch, getState):Promise<IAction> =>
  dispatch(createFetchAction('AUTH:FACEBOOK:LOGIN', facebook.login)())

export default loginWithFacebook
