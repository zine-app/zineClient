import { createAction } from 'redux-actions'

export default createAction('UI:LOADING:STOP',
  () => ({}),
  ({ name }) => ({ name })
)
