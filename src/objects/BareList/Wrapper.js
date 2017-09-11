import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames, buildClassName } from '../../utils/'

const BareListWrapper = ({ tag, spacing, className, children, ...rest }) =>
  E(
    tag || 'ul',
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
  tag: T.string,
  spacing: T.oneOfType([
    T.string,
    T.array
  ]),
  className: T.string,
  children: T.node
}

export default BareListWrapper
