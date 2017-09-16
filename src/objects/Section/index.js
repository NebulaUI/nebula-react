import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames, buildClassName, buildBreakpointValues } from '../../utils/'
import { SECTION_SIZES as SIZES } from '../../constants'

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

const sizes = buildBreakpointValues(SIZES)

const propTypeSizes = T.oneOfType([
  T.oneOf(sizes),
  T.arrayOf(T.oneOf(sizes))
])

Section.propTypes = {
  tag: T.string,
  size: propTypeSizes,
  className: T.string,
  children: T.node
}

export { Section }
