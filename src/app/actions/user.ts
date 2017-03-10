import { createAction } from 'redux-actions'

export type TSetUser = (user:Partial<Constant.IUser>) => Action.CreatorReturnTypes
export const setUser:TSetUser = (user) => createAction('USER:SET')(user)
