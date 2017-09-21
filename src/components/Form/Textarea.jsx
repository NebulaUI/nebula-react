import React from 'react'
import T from 'prop-types'

import classNames from '../../utils/classNames'
import { NAMESPACE } from '../../constants'

const Textarea = ({ className, ...rest }) => (
  <textarea
    className={classNames(`${NAMESPACE}c-text-input ${NAMESPACE}c-text-input--textarea`, className)}
    {...rest}
  />
)

Textarea.propTypes = {
  className: T.string
}

export default Textarea

