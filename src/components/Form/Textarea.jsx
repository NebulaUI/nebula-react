import React from 'react'
import T from 'prop-types'
import classNames from '../../utils/classNames'

const Textarea = ({ className, ...rest }) => (
  <textarea
    className={classNames('c-text-input c-text-input--textarea', className)}
    {...rest}
  />
)

Textarea.propTypes = {
  className: T.string
}

export default Textarea

