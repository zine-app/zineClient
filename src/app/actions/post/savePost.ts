import createFetchAction from 'app/utils/actions/createFetchAction'
import { requestSavePost } from 'app/webAPI/post'

export default (post:webAPI.Request.ZinePost) =>
  createFetchAction('POST:SAVE', requestSavePost, post)()
