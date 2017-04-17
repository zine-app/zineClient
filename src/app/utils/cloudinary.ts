import { reduce } from 'lodash'

export default ({
  url = '',
  height,
  width,
  crop = 'lfill',
  quality = 'auto',
  gravity = 'center'
}: {
  url: string,
  height?: number,
  width?: string | number,
  crop?: string,
  quality?:string,
  gravity?:string
}) => {
  const cloudinaryURLWithFolderRegex = /http:\/\/res.cloudinary.com\/quillapp\/image\/upload\/[a-z|0-9]+\/[a-z]+\/[a-z|0-9]/
  const cloudinaryURLRegex = /http:\/\/res.cloudinary.com\/quillapp\/image\/upload\//
  const cloudinaryURL = url.match(cloudinaryURLRegex)[0]
  const cloudinaryParams = url.replace(cloudinaryURL, '').split('/')

  let folder, version, imageId

  if(cloudinaryURLWithFolderRegex.test(url)) {
    version = cloudinaryParams[0]
    folder = cloudinaryParams[1]
    imageId = cloudinaryParams[2]
  } else {
    version = cloudinaryParams[0]
    imageId = cloudinaryParams[1]
  }

  const widthBreakpoint = reduce([414, 800, 2600], (breakpoint, width, index) => {
    return screen.width > width ? index : breakpoint
  }, 0)

  const widths = typeof width === 'string' ? width.split(' ') : [width]
  const transformWidth = widths[Math.min(widthBreakpoint, widths.length - 1)]

  const transformOptions = {
    q: quality,
    w: transformWidth,
    h: height,
    c: crop,
    g: gravity
  }

  const transformations = reduce(transformOptions, (opts, value, key) => {
    return value ? opts.concat(`${key}_${value}`) : opts
  }, []).join(',')


  return folder ?
    `${cloudinaryURL}${transformations}/${folder}/${imageId}` :
    `${cloudinaryURL}${transformations}/${imageId}`
}
