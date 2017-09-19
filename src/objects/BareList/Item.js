import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, BLOCK_TAGS } from '../../constants'

const BareListItem = ({ tag, className, children, ...rest }) =>
  E(
    tag || 'li',
    { className: classNames(`${NAMESPACE}o-bare-list__item`, className), ...rest },
    children
  )

BareListItem.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  className: T.string,
  children: T.node
}

export default BareListItem
