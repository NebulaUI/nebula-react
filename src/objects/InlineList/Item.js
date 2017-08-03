import { createElement as E } from 'react'
import T from 'prop-types'

import classNames from '../../utils/classNames'

const InlineListItem = ({ node, className, children }) =>
  E(
    node || 'li',
    { className: classNames('o-inline-list__item', className) },
    children
  )

InlineListItem.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node
}

export default InlineListItem
