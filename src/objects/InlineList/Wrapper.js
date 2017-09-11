import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames, buildClassName } from '../../utils/'

const InlineListWrapper = ({ tag, spacing, className, children, ...rest }) =>
  E(
    tag || 'ul',
    {
      className: classNames(
        'o-inline-list',
        spacing
          ? buildClassName('o-inline-list--spaced-', spacing)
          : null,
        className
      ),
      ...rest
    },
    children
  )

InlineListWrapper.propTypes = {
  tag: T.string,
  spacing: T.oneOfType([
    T.string,
    T.array
  ]),
  className: T.string,
  children: T.node
}

export default InlineListWrapper
