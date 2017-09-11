import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const InlineListItem = ({ tag, className, children, ...rest }) =>
  E(
    tag || 'li',
    { className: classNames('o-inline-list__item', className), ...rest },
    children
  )

InlineListItem.propTypes = {
  tag: T.string,
  className: T.string,
  children: T.node
}

export default InlineListItem
