import React from 'react'
import T from 'prop-types'
import classNames from '../../utils/classNames'

const TextArea = ({ className }) => (
  <textarea id="text-input-3" className={classNames('c-text-input c-text-input--textarea', className)} placeholder="Your message…" />
)

TextArea.propTypes = {
  className: T.string
}

export default TextArea

