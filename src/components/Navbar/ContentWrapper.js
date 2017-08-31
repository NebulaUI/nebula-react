import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const ContentWrapper = ({ node, children, className, ...rest }) =>
  E(
    node || 'div',
    {
      className: classNames('c-navbar__content-wrapper', className),
      ...rest
    },
    children
  )

ContentWrapper.propTypes = {
  handleToggle: T.func,
  node: T.string,
  children: T.node.isRequired,
  className: T.string
}

export default ContentWrapper
