import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const initial = 'c-modal__content'

const Content = ({ tag, className, children, ...rest }) =>
  E(
    tag || 'div',
    {
      className: classNames(initial, className),
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
