import { createElement as E } from 'react'
import T from 'prop-types'

import classNames from '../../utils/classNames'

const BareListItem = ({ node, className, children }) =>
  E(
    node || 'li',
    { className: classNames('o-bare-list__item', className) },
    children
  )

BareListItem.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node
}

export default BareListItem
