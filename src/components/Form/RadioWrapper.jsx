import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const RadioWrapper = ({ tag, className, children, ...rest }) =>
  E(
    tag || 'div',
    {
      className: classNames('c-form-input', className),
      ...rest
    },
    children
  )

RadioWrapper.propTypes = {
  tag: T.string,
  className: T.string,
  children: T.node
}

export default RadioWrapper
