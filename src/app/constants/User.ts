import { Record } from 'immutable'


const UserRecord = Record({
  id: '',
  name: '',
  email: '',
  profileImageURL: '',
  facebookUserId: '',
  facebookUserAccessToken: ''
})

export class User extends UserRecord {
  name: string
  email: string
  profileImageURL: string
  facebookUserId: string
  facebookUserAccessToken: string
}

export const createUser = (user ?: Partial<Constant.IUser>):User => new User(user)
