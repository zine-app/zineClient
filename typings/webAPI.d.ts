declare namespace webAPI.Request {
  interface ZineAuth {
    facebookUserId?:string,
    facebookUserAccessToken?:string,
    email?:string,
    password?:string,
    vendor: 'facebook' | 'zine'
  }

  interface ZinePost {
    type:string
    title?:string
    description?:string
    authorId?:string
    zineId:string
    contentURL:string
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

  interface ZineAuth extends IResponse {
    body?: Constant.IUser
  }

  interface ZineLogout extends IResponse {}

  interface FacebookAuthResponse extends IResponse {
    body: fb.AuthResponse
  }

  interface PostZine extends IResponse {
    body: Constant.IZine
  }

  interface FetchZines extends IResponse {
    body: Constant.IZine[]
  }

  interface FetchPosts extends IResponse {
    body: Constant.IPost[]
  }

  interface DeleteZines extends IResponse {
  }

  interface ZinePost {
    type:string
    title:string
    description:string
    authorId:string
    zineId:string
    contentURL:string
  }
}
