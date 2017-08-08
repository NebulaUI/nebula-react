import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const BareListItem = ({ node, className, children, ...rest }) =>
  E(
    node || 'li',
    { className: classNames('o-bare-list__item', className), ...rest },
    children
  )

BareListItem.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node
}

export default BareListItem
