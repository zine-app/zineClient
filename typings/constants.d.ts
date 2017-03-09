// State //

//TODO:change to Record.Class || Record.Instance
interface State extends Immutable.Iterable<{ user:User }, any> {
  user: User
}

interface CreateStateParams {
  User?: User
}




// USER //

interface User {
  name: string
  email: string
  profileImageURL: string
  facebookUserId: string
  facebookUserAccessToken: string
}

interface CreateUserParams {
  name?: string
  email?: string
  profileImageURL?: string
  facebookUserId?: string
  facebookUserAccessToken?: string
}
