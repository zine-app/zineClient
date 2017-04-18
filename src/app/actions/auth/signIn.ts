import { requestSignIn } from 'app/webAPI/auth'
import createFetchAction from 'app/utils/actions/createFetchAction'

export type TSignIn = (params:any) => Action.CreatorReturnTypes
const signIn:TSignIn = (params) =>
  createFetchAction('AUTH:SIGN_IN', requestSignIn, params)()

export default signIn
