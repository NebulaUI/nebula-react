import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const Title = ({ node, className, children, ...rest }) =>
  E(
    node || 'div',
    {
      className: classNames('c-foldable__title', className),
      ...rest
    },
    children
  )

Title.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node
}

export default Title
