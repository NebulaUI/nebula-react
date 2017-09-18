import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { BLOCK_TAGS } from '../../constants'

const UniformedListItem = ({ tag, className, children, ...rest }) =>
  E(
    tag || 'li',
    { className: classNames('o-uniformed-list__item', className), ...rest },
    children
  )

UniformedListItem.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  className: T.string,
  children: T.node
}

export default UniformedListItem
