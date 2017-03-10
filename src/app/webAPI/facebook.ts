type TmapFBAuthResponse = (response:fb.AuthResponse) => Promise<webAPI.Response.FacebookAuthResponse>

const mapFacebookAuthResponse = (response) => ({
  status: 200,
  error: false,
  body: response
})


type Tlogin = () => Promise<webAPI.Response.FacebookAuthResponse>

export const login:Tlogin = () =>
  new Promise((resolve, reject) => {
    if(!(<any>window).FB) reject(new Error('facebook sdk not loaded'))

    FB.login((response) => resolve({
      status: 200,
      error: false,
      body: response
    }), { scope: 'email' })
  })


type TgetLoginStatus = () => Promise<webAPI.Response.FacebookAuthResponse>

export const getLoginStatus:TgetLoginStatus = () =>
  new Promise((resolve, reject) => {
    if(!(<any>window).FB) reject(new Error('facebook sdk not loaded'))

    FB.getLoginStatus(response => resolve({
      status: 200,
      error: false,
      body: response
    }))
  })
