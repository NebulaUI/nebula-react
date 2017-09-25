import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, BLOCK_TAGS } from '../../constants'

const LinkListContent = ({ tag, className, children, ...rest }) =>
  E(
    tag || 'div',
    { className: classNames(
      `${NAMESPACE}c-link-list__content`, className
    ),
      ...rest
    },
    children
  )

LinkListContent.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  className: T.string,
  children: T.node.isRequired
}

export default LinkListContent
