import * as React from 'react'
import 'app/styles/post'

export default ({
  title = '',
  description = '',
  contentURL = ''
}) =>
  <div className="col-xs-12 col-sm-4 col-lg-3">
    <div className="post--padding">
      <div className="post--container">
        <div
          className="post--content-container"
        >
          <div className="post--content--image"
            style={{
              backgroundImage: `url('${contentURL}')`
            }}
          ></div>
          { title &&
            <div className="post--content--details">
              <h1 className="post--title">{title}</h1>
            </div>
          }
        </div>
      </div>
    </div>
  </div>
