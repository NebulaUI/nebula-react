import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames, buildClassName } from '../../utils/'

const Section = ({ node, size = 'md', className, children, ...rest }) =>
  E(
    node || 'section',
    {
      className: classNames(
        buildClassName('o-section-', size),
        className
      ),
      ...rest
    },
    children
  )

Section.propTypes = {
  node: T.string,
  size: T.oneOfType([
    T.string,
    T.array
  ]),
  className: T.string,
  children: T.node
}

export { Section }
