import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { BLOCK_TAGS } from '../../constants'

const Content = ({ tag, className, children, ...rest }) =>
  E(
    tag || 'div',
    {
      className: classNames('c-modal__content', className),
      ...rest
    },
    children
  )

Content.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  className: T.string,
  children: T.node.isRequired
}

export default Content
