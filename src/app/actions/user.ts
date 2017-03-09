import { createAction } from 'redux-actions'

export const setUser = (params:Partial<User>) => createAction('USER:SET')(params)
export type TsetUser = typeof setUser
