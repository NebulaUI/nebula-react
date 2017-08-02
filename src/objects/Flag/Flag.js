import { createElement as E } from 'react'
import T from 'prop-types'

import classNames from '../../utils/classNames/index'

const Flag = ({ node, breakpoint, gutter, reverse, children, className }) =>
  E(
    node || 'div',
    {
      className: classNames(
        breakpoint ? `o-flag@${breakpoint}` : 'o-flag',
        gutter ? `o-flag--gutter-${gutter}` : null,
        { 'o-flag--reverse': reverse },
        className
      )
    },
    children
  )

Flag.propTypes = {
  node: T.string,
  breakpoint: T.string,
  gutter: T.string,
  reverse: T.bool,
  children: T.node,
  className: T.string
}

export default Flag
