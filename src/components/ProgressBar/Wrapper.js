import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, BLOCK_TAGS } from '../../constants'

const ProgressBarWrapper = ({ tag, className, children, ...rest }) =>
  E(
    tag || 'div',
    {
      className: classNames(`${NAMESPACE}c-progress-bar`, className),
      ...rest
    },
    children
  )

ProgressBarWrapper.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  className: T.string,
  children: T.node.isRequired
}

export default ProgressBarWrapper
