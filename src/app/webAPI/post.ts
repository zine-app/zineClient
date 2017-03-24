import fetch from 'isomorphic-fetch'
import { checkStatus, parseJSON, handleError } from 'app/utils/fetch'
import toQueryString from 'app/utils/toQueryString'


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
      method: 'POST',
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
