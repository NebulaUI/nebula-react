import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, BLOCK_TAGS } from '../../constants'

const InlineListItem = ({ tag, className, children, ...rest }) =>
  E(
    tag || 'li',
    { className: classNames(`${NAMESPACE}o-inline-list__item`, className), ...rest },
    children
  )

InlineListItem.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  className: T.string,
  children: T.node
}

export default InlineListItem
