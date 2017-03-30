import createFetchAction from 'app/utils/actions/createFetchAction'
import { requestFetchPosts } from 'app/webAPI/post'
import uploadImage from 'app/webAPI/image'
import { isArray } from 'lodash'

export default query => createFetchAction('POST:FETCH', requestFetchPosts, query)()
