import { createElement as E } from 'react'
import T from 'prop-types'

import classNames from '../../utils/classNames'
import buildClassName from '../../utils/buildClassName'

const UniformedListWrapper = ({ node, breakpoint, className, children, ...rest }) =>
  E(
    node || 'ul',
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
  node: T.string,
  breakpoint: T.string,
  className: T.string,
  children: T.node
}

export default UniformedListWrapper
