import { requestZineSignUp } from 'app/webAPI/auth'
import createFetchAction from 'app/utils/actions/createFetchAction'

export type TLoginWithZine = (params:webAPI.Request.ZineAuth) => Action.CreatorReturnTypes
const loginWithZine:TLoginWithZine = (params) =>
  createFetchAction('AUTH:ZINE:SIGNUP', requestZineSignUp, params)()

export default loginWithZine
