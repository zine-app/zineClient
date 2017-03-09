import { logout } from 'app/webAPI/auth'
import { set as setUser } from 'app/actions/user'

export default async () => {

  await logout()

  return setUser({
      name: '',
      email: '',
      profileImageURL: ''
  })
}
