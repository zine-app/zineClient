import * as React from 'react'
import PlusIcon from 'app/icons/plus'
import 'app/styles/newZineButton'

export default ({ onClick, disabled }) =>
  <button disabled={disabled} className="new-zine-button" onClick={onClick}>
    <PlusIcon color={disabled ? 'rgb(200,200,200)' : 'rgb(80,80,80)'} />
  </button>
