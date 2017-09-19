import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/index'
import { NAMESPACE, BLOCK_TAGS } from '../../constants'

const UIListItem = ({ tag, className, children, ...rest }) =>
  E(
    tag || 'li',
    { className: classNames(`${NAMESPACE}c-ui-list__item`, className), ...rest },
    children
  )

UIListItem.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  className: T.string,
  children: T.node
}

export default UIListItem
