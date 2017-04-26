import createFetchAction from 'app/utils/actions/createFetchAction'
import { requestSignUpWithEmail } from 'app/webAPI/auth'


export const signUp = (email, password) => createFetchAction(
  'AUTH:SIGNUP',
  requestSignUpWithEmail,
  { email, password }
)()


export const signIn = () => {}
