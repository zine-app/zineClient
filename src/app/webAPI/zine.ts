import fetch from 'isomorphic-fetch'
import { checkStatus, parseJSON, handleError } from 'app/utils/fetch'
import toQueryString from 'app/utils/toQueryString'
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
  fetch(`${API_URL}/my/zines?${toQueryString(query)}`, {
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

export const requestGetZine = (query) =>
  fetch(`${API_URL}/zine?${toQueryString(query)}`, {
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

export const requestGetZines = (query) =>
    fetch(`${API_URL}/zines?${toQueryString(query)}`, {
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
    fetch(`${API_URL}/zine?${toQueryString(pick(zine, ['id']))}`, {
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
