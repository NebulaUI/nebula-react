import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const Item = ({ node, className, children, ...rest }) =>
  E(
    node || 'div',
    { className: classNames('c-card', className), ...rest },
    children
  )

Item.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node
}

export default Item
