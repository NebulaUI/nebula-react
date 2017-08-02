import { createElement as E } from 'react'
import T from 'prop-types'
import classNames from '../../utils/classNames'

const Panel = ({ node, children, className }) =>
  E(
    node || 'div',
    { className: classNames('c-tabs__panel', className) },
    children
  )

Panel.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node
}

export default Panel
