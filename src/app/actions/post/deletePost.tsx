import createFetchAction from 'app/utils/actions/createFetchAction'
import { requestDeletePost } from 'app/webAPI/post'

export type TdeletePost = (post:any) => Action.CreatorReturnTypes
export const deletePost:TdeletePost = post =>
  createFetchAction(
    'POST:DELETE',
    requestDeletePost,
    { _id: post.id }
  )()

export default deletePost
