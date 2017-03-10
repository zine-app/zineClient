declare namespace webAPI.Request {
  interface ZineAuth {
    facebookUserId?:string,
    facebookUserAccessToken?:string,
    email?:string,
    password?:string,
    vendor: 'facebook' | 'zine'
  }
}



declare namespace webAPI.Response {
  interface IResponse {
    status: number,
    error: boolean,
    message?: string,
    body?: any
  }

  interface Error extends IResponse {
    error: true
    body: null
  }

  interface GetMe extends IResponse {
    body?: Constant.IUser
  }

  interface ZineAuth extends IResponse {
    body?: Constant.IUser
  }

  interface ZineLogout extends IResponse {}

  interface FacebookAuthResponse extends IResponse {
    body: fb.AuthResponse
  }
}
