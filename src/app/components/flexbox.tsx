import { merge, has } from 'lodash';
import * as React from 'react';

interface Props extends React.Props<void>{
    style?: React.CSSProperties;

    /** maps to flex-basis */
    size?: number|string;

    /** maps to flex-direction */
    direction?: 'row' | 'column';

    /** short property maps to justify-content */
    justify?: 'start' | 'end' | 'center' | 'between' | 'around';

    /** short property maps to align-items */
    crossJustify?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';

    alignContent?: 'start' | 'end' | 'center' | 'between' | 'around' | 'stretch';

    grow?: number;
    shrink?: number;
    align?: 'auto' | 'start' | 'end' | 'center' | 'baseline' | 'stretch';

    scrollable?: boolean;
}

const getFlexProperty = (shortProperty: string) : 'flex-start' | 'flex-end' | 'space-around' |  'space-between' => {
  const flexPropertyMap = {
    start: 'flex-start',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around'
  }

  return has(flexPropertyMap, shortProperty) ?
    flexPropertyMap[shortProperty] :
    shortProperty
}


export default ({
  children,
  size = 'auto',
  direction = 'row',
  justify = 'start',
  crossJustify = 'start',
  alignContent = 'start',
  grow = 0,
  shrink = 0,
  align = 'start',
  scrollable = false
}: Props) =>
  <span
    className='View'
    style={{
      display: 'flex',
      flexDirection: direction,
      justifyContent: getFlexProperty(justify),
      alignItems: getFlexProperty(crossJustify),
      alignContent: getFlexProperty(alignContent),
      flexBasis: size,
      flexGrow: grow,
      flexShrink: shrink,
      alignSelf: getFlexProperty(align),
      overflowY: scrollable ? 'auto' : 'initial'
    }}
  >
    {children}
  </span>
