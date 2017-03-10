import { createAction } from 'redux-actions'
import createFetchAction from 'app/utils/actions/createFetchAction'
import { requestPostMe } from 'app/webAPI/user'

export type TSaveUser = (user:Partial<Constant.IUser>) => Action.CreatorReturnTypes
export const saveUser:TSaveUser = (user) => createFetchAction('USER:SAVE', requestPostMe, user)()

export default saveUser
