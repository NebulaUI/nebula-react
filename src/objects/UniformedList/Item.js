import { createElement as E } from 'react'
import T from 'prop-types'

import classNames from '../../utils/classNames'

const UniformedListItem = ({ node, className, children }) =>
  E(
    node || 'li',
    { className: classNames('o-uniformed-list__item', className) },
    children
  )

UniformedListItem.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node
}

export default UniformedListItem
