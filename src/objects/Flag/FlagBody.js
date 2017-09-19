import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, BLOCK_TAGS } from '../../constants'


const FlagBody = ({ tag, children, className, ...rest }) =>
  E(
    tag || 'div',
    { className: classNames(`${NAMESPACE}o-flag__body`, className), ...rest },
    children
  )

FlagBody.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  children: T.node,
  className: T.string
}

export default FlagBody
