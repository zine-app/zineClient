import * as React from 'react'
import 'app/styles/post'

export default ({
  title = '',
  description = '',
  contentURL = ''
}) =>
  <div className="post--container">
    <h1 className="post--title">{title}</h1>
    <div className="post--content-container">{contentURL}</div>
    <h2 className="post--description">{description}</h2>
  </div>
