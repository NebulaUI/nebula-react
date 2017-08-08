import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const UniformedListItem = ({ node, className, children, ...rest }) =>
  E(
    node || 'li',
    { className: classNames('o-uniformed-list__item', className), ...rest },
    children
  )

UniformedListItem.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node
}

export default UniformedListItem
