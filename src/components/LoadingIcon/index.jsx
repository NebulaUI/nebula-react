import React from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { ALL_TAGS } from '../../constants'
import { Icon } from '../Icon'

const buildIcon = (fill, size, position) => () => (
  <svg
    version="1.1"
    id="loader"
    x="0"
    y="0"
    className={classNames('c-icon__svg', { 'c-icon__svg--left': position === 'left' }, { 'c-icon__svg--right': position === 'right' })}
    style={{
      width: size,
      height: size,
      fill
    }}
    viewBox="0 0 50 50"
    role="presentation"
  >
    <path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="1s"
        repeatCount="indefinite"
      />
    </path>
  </svg>
)

const LoadingIcon = ({
  fill = '8bc34a',
  className,
  size,
  iconPosition,
  verticalAlign,
  tag,
  children
}) => (
  <Icon
    size={size}
    tag={tag}
    verticalAlign={verticalAlign}
    iconPosition={iconPosition}
    icon={buildIcon(fill, size, iconPosition)}
    className={classNames(className)}
  >
    { children }
  </Icon>
)

LoadingIcon.propTypes = {
  fill: T.string,
  tag: T.oneOf(ALL_TAGS),
  size: T.string,
  iconPosition: T.oneOf(['left', 'right']),
  verticalAlign: T.string,
  className: T.string,
  children: T.node
}

export { LoadingIcon }
