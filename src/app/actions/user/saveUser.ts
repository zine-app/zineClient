import { createAction } from 'redux-actions'
import createFetchAction from 'app/utils/actions/createFetchAction'
import { requestPostMe } from 'app/webAPI/user'
import uploadImage from 'app/webAPI/image'
import { isArray } from 'lodash'


export type TSaveUser = (user:Partial<Constant.IUser>) => Action.CreatorReturnTypes
export const saveUser:TSaveUser = (user) => async dispatch => {
  if(isArray(user.profileImageURL)) {
    const uploadImageResponse = await uploadImage(user.profileImageURL[0])

    user.profileImageURL = uploadImageResponse.body.url
  }

  return dispatch(createFetchAction('USER:SAVE', requestPostMe, user)())
}

export default saveUser
