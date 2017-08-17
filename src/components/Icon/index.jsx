import React from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const Icon = ({ width, height, className, icon: { id, viewBox } }) => (
  <svg
    viewBox={viewBox}
    className={classNames('c-icon', className)}
    role="presentation"
    style={{ width, height }}
  >
    <use xlinkHref={`#${id}`} />
  </svg>
)

Icon.propTypes = {
  icon: T.shape({
    id: T.string.isRequired,
    viewBox: T.string.isRequired
  }).isRequired,
  width: T.string,
  height: T.string,
  className: T.string
}

export { Icon }
