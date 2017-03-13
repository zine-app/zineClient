import fetch from 'isomorphic-fetch'
import { checkStatus, parseJSON, handleError } from 'app/utils/fetch'

export default file => {
  const data = new FormData()
  data.append('upload_preset', 'u18tugcb')
  data.append('file', file)

  return fetch(CLOUDINARY_URL, {
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
