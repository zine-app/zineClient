import { createAction } from 'redux-actions'

export default createAction('UI:LOADING:START',
  () => ({}),
  ({ name }) => ({ name })
)
