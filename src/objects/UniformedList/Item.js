import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const UniformedListItem = ({ tag, className, children, ...rest }) =>
  E(
    tag || 'li',
    { className: classNames('o-uniformed-list__item', className), ...rest },
    children
  )

UniformedListItem.propTypes = {
  tag: T.string,
  className: T.string,
  children: T.node
}

export default UniformedListItem
