import fetch from 'isomorphic-fetch'
import appendQuery from 'append-query'
import { checkStatus, parseJSON, handleError } from 'app/utils/fetch'

export const requestGetMe = ():Promise<webAPI.Response.ZineAuth> =>
  fetch(`${API_URL}/my/user`, {
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

export const requestGetUsers = (query = {}):Promise<webAPI.Response.ZineAuth> =>
  fetch(appendQuery(`${API_URL}/user`, query, { removeNull: true, encodeComponents: false }), {
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
