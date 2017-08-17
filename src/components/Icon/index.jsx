import React from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const Icon = ({ width, height, left, right, verticalAlign, className, icon: { id, viewBox } }) => (
  <svg
    viewBox={viewBox}
    className={classNames('c-icon', { 'c-icon--left': left }, { 'c-icon--right': right }, className)}
    role="presentation"
    style={{ width, height, verticalAlign }}
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
  left: T.bool,
  right: T.bool,
  verticalAlign: T.string,
  className: T.string
}

export { Icon }
