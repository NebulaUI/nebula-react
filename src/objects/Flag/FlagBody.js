import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const FlagBody = ({ tag, children, className, ...rest }) =>
  E(
    tag || 'div',
    { className: classNames('o-flag__body', className), ...rest },
    children
  )

FlagBody.propTypes = {
  tag: T.string,
  children: T.node,
  className: T.string
}

export default FlagBody
