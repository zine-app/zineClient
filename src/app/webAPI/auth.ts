import fetch from 'isomorphic-fetch'
import { pick } from 'lodash'

export const login = (loginWithZineRequestBody: ZineLoginRequestParams):Promise<ZineLoginResponse> =>
  fetch(`${API_URL}/auth/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(loginWithZineRequestBody)
  })
  .then(response => {
    return response.ok ?
      response :
      new Error(response.statusText)
  })
  .then(response => response.json())
  .then(body => pick(body, ['name','email','profileImageURL']))
  .catch(error => ({
    error: true,
    message: error.message
  }))

export const logout = () =>
  fetch(`${API_URL}/auth/logout`, {
    credentials: 'include'
  })
  .catch(error => ({
    error: true,
    message: error.message
  }))
