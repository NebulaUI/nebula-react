import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames, buildClassName } from '../../utils/'

const UniformedListWrapper = ({ tag, breakpoint, className, children, ...rest }) =>
  E(
    tag || 'ul',
    {
      className: classNames(
        breakpoint
          ? buildClassName('o-bare-list o-uniformed-list@', breakpoint)
          : 'o-uniformed-list',
        className
      ),
      ...rest
    },
    children
  )

UniformedListWrapper.propTypes = {
  tag: T.string,
  breakpoint: T.string,
  className: T.string,
  children: T.node
}

export default UniformedListWrapper
