// State //

//TODO:change to Record.Class || Record.Instance
interface IState extends Immutable.Iterable<{ user:IUser }, any> {
  user: IUser
}


// USER //
interface IUser {
  name: string
  email: string
  profileImageURL: string
  facebookUserId: string
  facebookUserAccessToken: string
}
