import * as React from 'react'
import 'app/styles/post'
import ProfileImage from 'app/components/ProfileImage'
import ZineIcon from 'app/components/ZineIcon'
import moment from 'moment'
import { Link } from 'react-router-dom'
import cloudinary from 'app/utils/cloudinary'

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

const getFirstImageURL = body => {
  if(body.entityMap.length) {
    return body.entityMap[0].data.url
  }
}

export default ({
  id = '',
  title = '',
  body = null,
  createdAt = '',
  author: {
    profileImageURL= ''
  } = {},
  zine = null
}) =>
  <div className="col-xs-12 col-sm-4 col-lg-3">
    <div className="post--padding">
      <div className="post--container">
        <div className="post--content-container">
            <div
              className="post--content--image"
              style={{
                backgroundColor: '#FFF',
                display: 'flex',
                boxSizing: 'border-box',
                padding: '1rem',
                textAlign: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                fontFamily: ' Helvetica, Arial, sans-serif',
                fontSize: '2rem',
                position: 'relative',
                backgroundImage:
                  getFirstImageURL(body) ?
                    `url('${cloudinary({
                      url: getFirstImageURL(body),
                      width: 620
                    })}')` :
                    'none'
              }}
            >
              <Link
                style={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%'
                }}
                to={`/${zine.name}/post/${id}`}></Link>
              { getFirstImageURL(body) ? null : title }
            </div>
            <div className="post--content--details">
              <div className="post--content--details--left-block">
                <div className="post--details-icon">
                  <ZineIcon url={zine ? zine.iconImageURL : ''} size="small" />
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
