import createFetchAction from 'app/utils/actions/createFetchAction'
import { requestPostZine } from 'app/webAPI/zine'
import uploadImage from 'app/webAPI/image'
import { isArray } from 'lodash'


export type TSaveZine = (user:Partial<Constant.IZine>) => any
export const saveZine:TSaveZine = zine =>
  async dispatch => {

    if(isArray(zine.iconImageURL)) {
      const uploadImageResponse = await uploadImage(zine.iconImageURL[0])

      zine.iconImageURL = uploadImageResponse.body.url
    }

    return dispatch(createFetchAction('ZINE:SAVE', requestPostZine, zine)())
  }

export default saveZine
