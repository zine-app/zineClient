import * as React from 'react'
import PlusIcon from 'app/icons/plus'
import 'app/styles/newZineButton'

export default ({ onClick }) =>
  <button className="new-zine-button" onClick={onClick}>
    <PlusIcon />
  </button>
