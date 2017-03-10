declare namespace Constant {
  //TODO:change to Record.Class || Record.Instance
  interface IState {
    user: IUser
  }

  interface IUser {
    id: string
    name: string
    email: string
    profileImageURL: string
    facebookUserId: string
    facebookUserAccessToken: string
  }
}
