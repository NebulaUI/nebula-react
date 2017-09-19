import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames, buildClassName, buildBreakpointValues } from '../../utils/'
import { NAMESPACE, SECTION_SIZES, BLOCK_TAGS } from '../../constants'

const Section = ({ tag, size, className, children, ...rest }) =>
  E(
    tag || 'section',
    {
      className: classNames(
        size && buildClassName(`${NAMESPACE}o-section-`, size),
        className
      ),
      ...rest
    },
    children
  )

const sizes = buildBreakpointValues(SECTION_SIZES)

const propTypeSizes = T.oneOfType([
  T.oneOf(sizes),
  T.arrayOf(T.oneOf(sizes))
])

Section.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  size: propTypeSizes,
  className: T.string,
  children: T.node
}

export { Section }
