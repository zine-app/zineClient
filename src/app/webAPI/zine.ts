import fetch from 'isomorphic-fetch'
import { checkStatus, parseJSON, handleError } from 'app/utils/fetch'
import appendQuery from 'append-query'
import { pick } from 'lodash'

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

export const requestFetchMyZines = (query = {}) =>
  fetch(appendQuery(`${API_URL}/my/zines`, query, { removeNull: true, encodeComponents: false }), {
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

export const requestFetchZine = (query) =>
  fetch(appendQuery(`${API_URL}/zine`, query, { removeNull: true, encodeComponents: false }), {
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

export const requestFetchZines = (query) =>
    fetch(appendQuery(`${API_URL}/zines`, query, { removeNull: true, encodeComponents: false }), {
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


export const requestDeleteZine = zine =>
    fetch(appendQuery(`${API_URL}/my/zines`, pick(zine, ['id'])), {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    })
    .then(checkStatus)
    .then(parseJSON)
    .then((body):webAPI.Response.DeleteZines => ({
      error: false,
      status: 200
    }))
    .catch(handleError)
