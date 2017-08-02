import { createElement as E } from 'react'
import T from 'prop-types'

import classNames from '../../utils/classNames/index'

const FlagComponent = ({ node, nowrap, children, className }) =>
  E(
    node || 'div',
    {
      className: classNames(
        'o-flag__component',
        { 'o-flag__component--nowrap': nowrap },
        className
      )
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
