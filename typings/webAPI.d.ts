interface RequestGetMeResponse {
  email: string,
  name: string,
  profileImageURL: string,
  id: string
}

interface ZineLoginRequestParams {
  facebookUserId?:string,
  facebookUserAccessToken?:string,
  email?:string,
  password?:string,
  vendor:'facebook' | 'zine'
}

interface ZineLoginResponse {
  error:boolean,
  message?: string,
  name?: string,
  email?: string,
  profileImageURL?: string
}
