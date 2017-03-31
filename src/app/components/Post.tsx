import * as React from 'react'
import 'app/styles/post'
import ProfileImage from 'app/components/ProfileImage'
import ZineIcon from 'app/components/ZineIcon'
import PostEditor from 'app/containers/PostEditor'
import moment from 'moment'
import { Link } from 'react-router-dom'

moment.locale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s',
    s:  'now',
    ss: '%ss',
    m:  '1m',
    mm: '%dm',
    h:  '1h',
    hh: '%dh',
    d:  '1d',
    dd: '%dd',
    M:  '1m',
    MM: '%dM',
    y:  '1y',
    yy: '%dY'
  }
});



export default ({
  id = '',
  title = '',
  body = null,
  createdAt = '',
  author: {
    profileImageURL= ''
  },
  zine = null
}) =>
  <div className="col-xs-12 col-sm-4 col-lg-3">
    <div className="post--padding">
      <div className="post--container">
        <div className="post--content-container">
          <Link to={`/${zine.name}/post/${id}`}>
            <div className="post--content--image">
              <PostEditor readOnly={true} initialState={body} />
              </div>
          </Link>
            <div className="post--content--details">
              <div className="post--content--details--left-block">
                <div className="post--details-icon">
                  <ZineIcon zine={zine} size="small" />
                </div>
                <div style={{ width: '0.4em' }} />
                { title &&
                  <Link to={`/${zine.name}/post/${id}`}>
                    <h1 className="post--title">{title}</h1>
                  </Link>
                }
              </div>
              <div className="post--content--details--right-block">
                <div className="post--time">{moment(createdAt).fromNow()}</div>
                <div style={{ width: '0.4em' }} />
                <ProfileImage src={profileImageURL} size="small" />
                <div className="post--zine--icon"></div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
