import React, { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, ALL_TAGS } from '../../constants'

const Icon = ({
  tag,
  width,
  height,
  iconPosition,
  verticalAlign,
  className,
  children,
  fill,
  stroke,
  icon,
  ...rest
}) => {
  const enhancedChildren = E('span', { className: `${NAMESPACE}c-icon__text`, style: { verticalAlign } }, children)
  const enhancedChildrenIconLeft = children && iconPosition === 'left' && enhancedChildren
  const enhancedChildrenIconRight = children && iconPosition === 'right' && enhancedChildren
  const buildIcon = () => E(
    icon,
    {},
  )

  const buildIconWithUseTag = () => (
    <svg
      viewBox={icon.viewBox}
      className={classNames(`${NAMESPACE}c-icon__svg`, { [`${NAMESPACE}c-icon__svg--left`]: iconPosition === 'left' }, { [`${NAMESPACE}c-icon__svg--right`]: iconPosition === 'right' })}
      role="presentation"
      style={{ width, height, verticalAlign, fill, stroke }}
    >
      <use xlinkHref={`#${icon.id}`} />
    </svg>
  )
  return E(
    tag || 'div',
    {
      className: classNames(`${NAMESPACE}c-icon`, className),
      ...rest
    },
    enhancedChildrenIconRight,
    typeof icon === 'function'
      ? buildIcon()
      : buildIconWithUseTag(),
    enhancedChildrenIconLeft
  )
}

Icon.propTypes = {
  icon: T.oneOfType([
    T.shape({
      id: T.string.isRequried,
      viewBox: T.string.isRequired
    }),
    T.func
  ]).isRequired,
  tag: T.oneOf(ALL_TAGS),
  width: T.string,
  height: T.string,
  iconPosition: T.oneOf(['left', 'right']),
  verticalAlign: T.string,
  className: T.string,
  children: T.node,
  fill: T.string,
  stroke: T.string
}

export { Icon }
