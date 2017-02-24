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

const flexPropertyMap: { [key: string]: string; } = {
    start: 'flex-start',
    end: 'flex-end',
    between: 'between',
    around: 'space-around'
}

function getFlexProperty(shortProperty: string) {
    if (has(flexPropertyMap, shortProperty)) {
        return flexPropertyMap[shortProperty];
    }

    return shortProperty;
}

export function View(props: Props) {
    let localProps: Props = merge({
        size: 'auto',
        direction: 'row',
        justify: 'start',
        crossJustify: 'start',
    }, props);

    let style = merge({
        display: 'flex',
        flexDirection: localProps.direction,
        justifyContent: getFlexProperty(localProps.justify),
        alignItems: getFlexProperty(localProps.crossJustify),
        alignContent: getFlexProperty(localProps.alignContent),

        flexBasis: localProps.size,
        flexGrow: localProps.grow,
        flexShrink: localProps.shrink,
        alignSelf: getFlexProperty(localProps.align)
    }, props.style);

    if (props.scrollable) style.overflowY = 'auto';

    return <span className='View' style={style}>{props.children}</span>
}