import { createElement as E } from 'react'
import T from 'prop-types'

import classNames from '../../utils/classNames'
import buildClassName from '../../utils/buildClassName'

const Wrapper = ({ node, spacing, className, children }) =>
  E(
    node || 'ul',
    {
      className: classNames(
        'o-bare-list',
        spacing
          ? buildClassName('o-bare-list--spaced-', spacing)
          : null,
        className
      )
    },
    children
  )

Wrapper.propTypes = {
  node: T.string,
  spacing: T.oneOfType([
    T.string,
    T.array
  ]),
  className: T.string,
  children: T.node
}

export default Wrapper
