import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const RadioWrapper = ({ node, className, children, ...rest }) =>
  E(
    node || 'div',
    {
      className: classNames('c-form-input', className),
      ...rest
    },
    children
  )

RadioWrapper.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node
}

export default RadioWrapper
