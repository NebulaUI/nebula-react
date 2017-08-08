import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const FlagComponent = ({ node, nowrap, children, className, ...rest }) =>
  E(
    node || 'div',
    {
      className: classNames(
        'o-flag__component',
        { 'o-flag__component--nowrap': nowrap },
        className
      ),
      ...rest
    },
    children
  )

FlagComponent.propTypes = {
  node: T.string,
  nowrap: T.bool,
  children: T.node,
  className: T.string
}

export default FlagComponent
