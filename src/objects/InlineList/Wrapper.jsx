import { createElement as E } from 'react'
import T from 'prop-types'

import classNames from '../../utils/classNames'
import buildClassName from '../../utils/buildClassName'

const InlineListWrapper = ({ node, spacing, className, children }) =>
  E(
    node || 'ul',
    {
      className: classNames(
        'o-inline-list',
        spacing
          ? buildClassName('o-inline-list--spaced-', spacing)
          : null,
        className
      )
    },
    children
  )

InlineListWrapper.propTypes = {
  node: T.string,
  spacing: T.oneOfType([
    T.string,
    T.array
  ]),
  className: T.string,
  children: T.node
}

export default InlineListWrapper
