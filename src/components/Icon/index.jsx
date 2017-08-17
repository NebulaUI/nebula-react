import React from 'react'
import T from 'prop-types'

const Icon = ({ width, height, className = 'c-icon', icon: { id, viewBox } }) => (
  <svg
    {...{ className, viewBox }}
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
