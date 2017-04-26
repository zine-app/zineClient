import fetch from 'isomorphic-fetch'
import { checkStatus, parseJSON, handleError } from 'app/utils/fetch'
import { pick } from 'lodash'

export const requestSignUpWithFacebook = params =>
  fetch(`${API_URL}/auth/signup/facebook`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
  .then(checkStatus)
  .then(parseJSON)
  .then(body => ({
    error: false,
    status: 200,
    body: body
  }))
  .catch(handleError)

  export const requestSignUpWithTwitter = () =>
    fetch(`${API_URL}/auth/signup/twitter`, {
      method: 'POST',
      credentials: 'include'
    })
    .then(checkStatus)
    .then(parseJSON)
    .then(body => ({
      error: false,
      status: 200,
      body: body
    }))
    .catch(handleError)






type TrequestZineSignUp = (params:webAPI.Request.ZineAuth) => Promise<webAPI.Response.ZineAuth>
export const requestZineSignUp:TrequestZineSignUp = (params) =>
  fetch(`${API_URL}/auth/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
  .then(checkStatus)
  .then(parseJSON)
  .then((body:any):webAPI.Response.ZineAuth => ({
    error: false,
    status: 200,
    body: body
  }))
  .catch(handleError)

type TrequestZineLogin = (params:webAPI.Request.ZineAuth) => Promise<webAPI.Response.ZineAuth>
export const requestZineLogin:TrequestZineLogin = (params) =>
  fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
  .then(checkStatus)
  .then(parseJSON)
  .then((body:any):webAPI.Response.ZineAuth => ({
    error: false,
    status: 200,
    body: body
  }))
  .catch(handleError)


type TrequestZineLogout = () => Promise<webAPI.Response.ZineAuth>
export const requestZineLogout:TrequestZineLogout = () =>
  fetch(`${API_URL}/auth/logout`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
  .then(checkStatus)
  .then(parseJSON)
  .then((body:any):webAPI.Response.ZineAuth => ({
    error: false,
    status: 200,
    body: body
  }))
  .catch(handleError)

type TrequestSignIn = (params:any) => Promise<webAPI.Response.ZineAuth>
export const requestSignIn:TrequestSignIn = params =>
  fetch(`${API_URL}/auth/signIn`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  })
  .then(checkStatus)
  .then(parseJSON)
  .then((body:any):webAPI.Response.ZineAuth => ({
    error: false,
    status: 200,
    body: body
  }))
  .catch(handleError)
