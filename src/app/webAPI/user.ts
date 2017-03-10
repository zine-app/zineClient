import fetch from 'isomorphic-fetch'
import { checkStatus, parseJSON, handleError } from 'app/utils/fetch'

export const requestGetMe = ():Promise<webAPI.Response.ZineAuth> =>
  fetch(`${API_URL}/user/me/`, {
      credentials: 'include'
    })
    .then(checkStatus)
    .then(parseJSON)
    .then((body):webAPI.Response.ZineAuth => ({
      error: false,
      status: 200,
      body: body
    }))
    .catch(handleError)

export const requestPostMe = (me):Promise<webAPI.Response.ZineAuth> =>
  fetch(`${API_URL}/user`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(me)
    })
    .then(checkStatus)
    .then(parseJSON)
    .then((body):webAPI.Response.ZineAuth => ({
      error: false,
      status: 200,
      body: body
    }))
    .catch(handleError)
