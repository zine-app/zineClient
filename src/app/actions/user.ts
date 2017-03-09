import { createAction } from 'redux-actions'

export const setUser:Action.TsetUser = (params) => createAction('USER:SET')(params)
