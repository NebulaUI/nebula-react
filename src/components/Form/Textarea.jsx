import React from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE } from '../../constants'

const Textarea = ({
  id,
  className,
  small,
  onChange,
  value,
  defaultValue,
  disabled,
  ...rest
}) => (
  <textarea
    className={classNames(
      `${NAMESPACE}c-text-input ${NAMESPACE}c-text-input--textarea`,
      small ? `${NAMESPACE}c-text-input--sm` : '',
      className
    )}
    {...{ id, disabled, onChange, defaultValue, value }}
    {...rest}
  />
)

Textarea.propTypes = {
  id: T.string,
  className: T.string,
  small: T.bool,
  onChange: T.func,
  disabled: T.bool,
  defaultValue: T.oneOfType([T.number, T.string]),
  value: T.oneOfType([T.number, T.string])
}

export default Textarea

