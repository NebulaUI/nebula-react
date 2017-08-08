import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const InlineListItem = ({ node, className, children, ...rest }) =>
  E(
    node || 'li',
    { className: classNames('o-inline-list__item', className), ...rest },
    children
  )

InlineListItem.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node
}

export default InlineListItem
