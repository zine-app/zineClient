import * as React from 'react'
import ProfileIcon from 'app/icons/profile'
import 'app/styles/zineIcon'
import cloudinary from 'app/utils/cloudinary'

const calculateImageWidth = size => {
  const sizeToWidthMap = {
    small: 30,
    medium: 60,
    large: 100
  }

  return sizeToWidthMap[size]
}

const style = ({ backgroundImageUrl, backgroundImageSize }) => {
  let backgroundImage = 'none'

  if(backgroundImageUrl) {
    const url = cloudinary({
      url: backgroundImageUrl,
      width: calculateImageWidth(backgroundImageSize),
      height: calculateImageWidth(backgroundImageSize)
    })

    backgroundImage = `url('${url}')`
  }

  return {
    backgroundImage
  }
}

export default ({ url="", size="medium", children=null }:{ url?:string, size?:string, children?:any }) =>
  <div
    className={`zine-icon__${size}`}
    style={style({
      backgroundImageUrl: url,
      backgroundImageSize: size
    })}
  >
  { children }
  </div>
