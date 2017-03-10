import fetch from 'isomorphic-fetch'
import { checkStatus, parseJSON, handleError } from 'app/utils/fetch'

export const requestGetMe = ():Promise<webAPI.Response.GetMe> =>
  fetch(`${API_URL}/user/me/`, {
      credentials: 'include'
    })
    .then(checkStatus)
    .then(parseJSON)
    .then((body):webAPI.Response.GetMe => ({
      error: false,
      status: 200,
      body: body
    }))
    .catch(handleError)
