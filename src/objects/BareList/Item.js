import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const BareListItem = ({ tag, className, children, ...rest }) =>
  E(
    tag || 'li',
    { className: classNames('o-bare-list__item', className), ...rest },
    children
  )

BareListItem.propTypes = {
  tag: T.string,
  className: T.string,
  children: T.node
}

export default BareListItem
