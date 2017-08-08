import React from 'react'
import T from 'prop-types'
import classNames from '../../utils/classNames'

const TextArea = ({ className, ...rest }) => (
  <textarea
    className={classNames('c-text-input c-text-input--textarea', className)}
    {...rest}
  />
)

TextArea.propTypes = {
  className: T.string
}

export default TextArea

