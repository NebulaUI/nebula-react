import { createElement as E } from 'react'
import T from 'prop-types'

import classNames from '../../utils/classNames/index'

const FlagBody = ({ node, children, className }) =>
  E(
    node || 'div',
    { className: classNames('o-flag__body', className) },
    children
  )

FlagBody.propTypes = {
  node: T.string,
  children: T.node,
  className: T.string
}

export default FlagBody
