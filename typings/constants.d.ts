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

  interface IZine {
    id: string
    ownerId: string
    name: string
    description: string
    categories: string
    iconImageURL: string
    headerImageURL: string
    published: boolean
  }
}
