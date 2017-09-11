import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

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
  tag: T.string,
  className: T.string,
  children: T.node.isRequired
}

export default Content