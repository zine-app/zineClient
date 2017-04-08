import fetch from 'isomorphic-fetch'
import { checkStatus, parseJSON, handleError } from 'app/utils/fetch'
import toQueryString from 'app/utils/toQueryString'
import appendQuery from 'append-query'


export const requestFetchPosts = (query):Promise<webAPI.Response.ZinePost> =>
  fetch(`${API_URL}/posts?${toQueryString(query)}`, {
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

export const requestSavePost = (post):Promise<webAPI.Response.ZinePost> =>
  fetch(`${API_URL}/post`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(checkStatus)
    .then(parseJSON)
    .then((body):webAPI.Response.ZineAuth => ({
      error: false,
      status: 200,
      body: body
    }))
    .catch(handleError)

export const requestDeletePost = (query):Promise<webAPI.Response.ZinePost> =>
  fetch(appendQuery(`${API_URL}/post`, query, { removeNull: true, encodeComponents: false }), {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(checkStatus)
    .then(parseJSON)
    .then((body):webAPI.Response.ZineAuth => ({
      error: false,
      status: 200,
      body: body
    }))
    .catch(handleError)
