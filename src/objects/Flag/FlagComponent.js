import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const FlagComponent = ({ tag, nowrap, children, className, ...rest }) =>
  E(
    tag || 'div',
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
  tag: T.string,
  nowrap: T.bool,
  children: T.node,
  className: T.string
}

export default FlagComponent
