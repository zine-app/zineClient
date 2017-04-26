import { Record } from 'immutable'


const UserRecord = Record({
  id: '',
  name: '',
  email: '',
  profileImageURL: ''
})

export class User extends UserRecord {
  name: string
  email: string
  profileImageURL: string
}

export const createUser = (user ?: Partial<Constant.IUser>):User => new User(user)
