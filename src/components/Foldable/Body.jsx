import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const Body = ({ node, className, children, ...rest }) =>
  E(
    node || 'div',
    {
      className: classNames('c-foldable__body', className),
      ...rest
    },
    children
  )

Body.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node
}

export default Body
