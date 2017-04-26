import fetch from 'isomorphic-fetch'
import { checkStatus, parseJSON, handleError } from 'app/utils/fetch'


export const login = () =>
  fetch(`${API_URL}/auth/twitter`, {
    redirect: 'follow',
    method: 'GET',
  })
  .then(checkStatus)
  .then(parseJSON)
  .then(body => ({
    error: false,
    status: 200,
    body: body
  }))
  .catch(handleError)
