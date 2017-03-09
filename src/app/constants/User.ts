import { Record } from 'immutable'


const userRecordDefaults:User = {
  name: '',
  email: '',
  profileImageURL: '',
  facebookUserId: '',
  facebookUserAccessToken: ''
}

export class UserRecord extends Record (userRecordDefaults) {
  name: string
  email: string
  profileImageURL: string
  facebookUserId: string
  facebookUserAccessToken: string
}

export const createUser = (user ?: CreateUserParams):User => new UserRecord(user)
