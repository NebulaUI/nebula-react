import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, BREAKPOINTS, FLAG_GUTTERS, BLOCK_TAGS } from '../../constants'

const FlagWrapper = ({
 tag,
 breakpoint,
 gutter,
 reverse,
 align,
 children,
 className,
  ...rest
}) =>
  E(
    tag || 'div',
    {
      className: classNames(
        breakpoint ? `${NAMESPACE}o-flag@${breakpoint}` : 'o-flag',
        gutter ? `${NAMESPACE}o-flag--gutter-${gutter}` : null,
        align ? `${NAMESPACE}o-flag--${align}` : null,
        { [`${NAMESPACE}o-flag--reverse`]: reverse },
        className
      ),
      ...rest
    },
    children
  )

FlagWrapper.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  breakpoint: T.oneOf(BREAKPOINTS),
  gutter: T.oneOf(FLAG_GUTTERS),
  reverse: T.bool,
  align: T.oneOf(['top', 'bottom']),
  children: T.node,
  className: T.string
}

export default FlagWrapper
