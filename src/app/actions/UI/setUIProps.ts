import { createAction } from 'redux-actions'

export default createAction('UI:PROPS:SET',
  ({ props }) => ({...props}),
  ({ name }) => ({ name })
)
