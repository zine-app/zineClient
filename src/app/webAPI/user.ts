import fetch from 'isomorphic-fetch'

export const requestGetMe = ():Promise<RequestGetMeResponse> =>
  fetch(`${API_URL}/user/me/`, {
      credentials: 'include'
    })
    .then(response => {
      return response.ok ?
        response :
        new Error(response.statusText)
    })
    .then(response => response.json())

  export default {
    requestGetMe
  }
