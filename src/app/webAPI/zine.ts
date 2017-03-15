import fetch from 'isomorphic-fetch'
import { checkStatus, parseJSON, handleError } from 'app/utils/fetch'

export const requestPostZine = (zine):Promise<webAPI.Response.PostZine> =>
  fetch(`${API_URL}/zine`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(zine)
    })
    .then(checkStatus)
    .then(parseJSON)
    .then((body):webAPI.Response.PostZine => ({
      error: false,
      status: 200,
      body: body
    }))
    .catch(handleError)

export const requestFetchMyZines = () =>
  fetch(`${API_URL}/my/zines`, {
      credentials: 'include'
    })
    .then(checkStatus)
    .then(parseJSON)
    .then((body):webAPI.Response.FetchZines => ({
      error: false,
      status: 200,
      body: body
    }))
    .catch(handleError)
