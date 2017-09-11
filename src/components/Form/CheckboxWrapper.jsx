import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils/'

const CheckboxWrapper = ({ tag, className, children, ...rest }) => (
  E(
    tag || 'div',
    {
      className: classNames('c-form-input', className),
      ...rest,
      children
    }
  )
)

CheckboxWrapper.propTypes = {
  tag: T.string,
  className: T.string,
  children: T.node
}

export default CheckboxWrapper
