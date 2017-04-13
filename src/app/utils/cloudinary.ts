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
  const cloudinaryURL = 'http://res.cloudinary.com/quillapp/image/upload/';
  const ImageVersionAndId = url.replace(cloudinaryURL, '').split('/')
  const version = ImageVersionAndId[0]
  const imageId = ImageVersionAndId[1]

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

  return `${cloudinaryURL}${transformations}/${imageId}`
}
