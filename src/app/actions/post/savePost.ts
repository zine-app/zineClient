import createFetchAction from 'app/utils/actions/createFetchAction'
import { requestSavePost } from 'app/webAPI/post'
import uploadImage from 'app/webAPI/image'
import { isArray } from 'lodash'

export default (post:webAPI.Request.ZinePost) => async dispatch => {
  if(post.type === 'image') {
    const uploadImageResponse = await uploadImage(post.contentURL[0], { folder: 'postImages' })
    post.contentURL = uploadImageResponse.body.url
  }

  return dispatch(createFetchAction('POST:SAVE', requestSavePost, post)())
}
