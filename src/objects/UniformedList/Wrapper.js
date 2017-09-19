import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames, buildClassName } from '../../utils/'
import { NAMESPACE, BREAKPOINTS, BLOCK_TAGS } from '../../constants'

const UniformedListWrapper = ({ tag, breakpoint, className, children, ...rest }) =>
  E(
    tag || 'ul',
    {
      className: classNames(
        breakpoint
          ? buildClassName(`${NAMESPACE}o-bare-list ${NAMESPACE}o-uniformed-list@`, breakpoint)
          : `${NAMESPACE}o-uniformed-list`,
        className
      ),
      ...rest
    },
    children
  )

UniformedListWrapper.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  breakpoint: T.oneOf(BREAKPOINTS),
  className: T.string,
  children: T.node
}

export default UniformedListWrapper
