import { createAction } from 'redux-actions'

export default createAction('UI:CREATE',
  () => ({}),
  ({ name }) => ({ name })
)
