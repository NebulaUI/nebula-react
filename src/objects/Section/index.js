import { createElement as E } from 'react'
import T from 'prop-types'

import classNames from '../../utils/classNames'
import buildClassName from '../../utils/buildClassName'

const Section = ({ node, size, className, children, ...rest }) =>
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
  ]).isRequired,
  className: T.string,
  children: T.node
}

export { Section }
