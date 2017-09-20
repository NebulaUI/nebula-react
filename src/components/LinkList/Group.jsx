import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

import { NAMESPACE, BLOCK_TAGS } from '../../constants'

const LinkListGroup = ({ tag, divider, children, className, ...rest }) =>
  E(
    tag || 'ul',
    {
      className: classNames(
        `${NAMESPACE}c-link-list__group`,
        `${divider ? `${NAMESPACE}c-link-list__group--divider` : ''}`,
       className,
      ),
      ...rest
    },
    children
  )

LinkListGroup.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  divider: T.bool,
  children: T.node.isRequired,
  className: T.string
}

export default LinkListGroup
