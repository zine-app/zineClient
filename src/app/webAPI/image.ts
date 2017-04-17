import fetch from 'isomorphic-fetch'
import { checkStatus, parseJSON, handleError } from 'app/utils/fetch'
import toQueryString from 'app/utils/toQueryString'
import appendQuery from 'append-query'

export default (file?:any, query?:any) => {
  const data = new FormData()
  data.append('upload_preset', 'u18tugcb')
  data.append('file', file)

  return fetch(appendQuery(CLOUDINARY_URL, query, { removeNull: true, encodeComponents: false }), {
    method: 'POST',
    body: data
  })
  .then(checkStatus)
  .then(parseJSON)
  .then((body) => ({
    error: false,
    status: 200,
    body: body
  }))
  .catch(handleError)
}
