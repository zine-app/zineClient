import createFetchAction from 'app/utils/actions/createFetchAction'
import { requestSignUpWithTwitter } from 'app/webAPI/auth'

export const signUp = () => async () => {
  const response = await requestSignUpWithTwitter()

  window.location.href = response.body.url
}

export const signIn = () => {}
