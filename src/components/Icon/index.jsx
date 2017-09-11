import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const Icon = ({
  tag,
  width,
  height,
  iconLeft,
  iconRight,
  verticalAlign,
  className,
  children,
  icon: { id, viewBox }
}) =>
  E(
    tag || 'div',
    {
      className: classNames('c-icon', className)
    },
    children && iconRight && E('span', { className: 'c-icon__text', style: { verticalAlign } }, children),
    E(
      'svg',
      {
        viewBox,
        className: classNames('c-icon__svg', { 'c-icon__svg--left': iconLeft }, { 'c-icon__svg--right': iconRight }),
        role: 'presentation',
        style: { width, height, verticalAlign }
      },
      E(
        'use',
        { xlinkHref: `#${id}` },
        null
      )
    ),
    children && iconLeft && E('span', { className: 'c-icon__text', style: { verticalAlign } }, children)
  )

Icon.propTypes = {
  icon: T.shape({
    id: T.string.isRequired,
    viewBox: T.string.isRequired
  }).isRequired,
  tag: T.string,
  width: T.string,
  height: T.string,
  iconLeft: T.bool,
  iconRight: T.bool,
  verticalAlign: T.string,
  className: T.string,
  children: T.node
}

export { Icon }
