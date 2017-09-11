import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames, buildClassName } from '../../utils/'

const Section = ({ tag, size, className, children, ...rest }) =>
  E(
    tag || 'section',
    {
      className: classNames(
        size && buildClassName('o-section-', size),
        className
      ),
      ...rest
    },
    children
  )

Section.propTypes = {
  tag: T.string,
  size: T.oneOfType([
    T.string,
    T.array
  ]),
  className: T.string,
  children: T.node
}

export { Section }
