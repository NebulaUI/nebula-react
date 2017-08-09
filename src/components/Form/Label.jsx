import React from 'react'
import T from 'prop-types'
import classNames from '../../utils/classNames'

const Label = ({ className, children, htmlFor, ...rest }) => (
  <label id="c-label" htmlFor={htmlFor} className={classNames('c-label', className)} {...rest}>
    {children}
  </label>
)

Label.propTypes = {
  className: T.string,
  children: T.node,
  htmlFor: T.string.isRequired
}

export default Label

