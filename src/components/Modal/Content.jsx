import React, { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import Dismiss from './Dismiss'

const initial = 'c-modal__content'

const Content = ({ node, closeModal, className, children, ...rest }) => {
  const enhancedChildren = React.Children.map(children, (child) => {
    if (child.type === Dismiss) {
      return React.cloneElement(child, {
        closeModal
      })
    }

    return child
  })

  return E(
    node || 'div',
    {
      className: classNames(initial, className),
      ...rest
    },
    enhancedChildren
  )
}

Content.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node.isRequired,
  closeModal: T.func
}

export default Content
