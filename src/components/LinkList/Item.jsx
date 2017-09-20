import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, BLOCK_TAGS } from '../../constants'

const LinkListItem = ({ tag, className, children, ...rest }) =>
  E(
    tag || 'li',
    { className: classNames(
      `${NAMESPACE}c-link-list__item`, className
    ),
      ...rest
    },
    children
  )

LinkListItem.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  className: T.string,
  children: T.node.isRequired
}

export default LinkListItem
