import { createElement as E } from 'react'
import T from 'prop-types'

import classNames from '../../utils/classNames'
import buildClassName from '../../utils/buildClassName'

const BareListWrapper = ({ node, spacing, className, children, ...rest }) =>
  E(
    node || 'ul',
    {
      className: classNames(
        'o-bare-list',
        spacing
          ? buildClassName('o-bare-list--spaced-', spacing)
          : null,
        className
      ),
      ...rest
    },
    children
  )

BareListWrapper.propTypes = {
  node: T.string,
  spacing: T.oneOfType([
    T.string,
    T.array
  ]),
  className: T.string,
  children: T.node
}

export default BareListWrapper
