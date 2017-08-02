import React from 'react'
import T from 'prop-types'

import classNames from '../../utils/classNames'

const Flag = ({ breakpoint, gutter, reverse, children, className }) => (
  <div
    className={classNames(
      'o-flag',
      breakpoint ? `o-flag@${breakpoint}` : null,
      gutter ? `o-flag--gutter-${gutter}` : null,
      { 'o-flag--reverse': reverse },
      className
    )}
  >
    {children}
  </div>
)

Flag.propTypes = {
  breakpoint: T.string,
  gutter: T.string,
  reverse: T.bool,
  children: T.node,
  className: T.string
}

export default Flag
