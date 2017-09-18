import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, BLOCK_TAGS } from '../../constants'

const CheckboxWrapper = ({ tag, className, children, ...rest }) => (
  E(
    tag || 'div',
    {
      className: classNames(`${NAMESPACE}c-form-input`, className),
      ...rest,
      children
    }
  )
)

CheckboxWrapper.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  className: T.string,
  children: T.node
}

export default CheckboxWrapper
