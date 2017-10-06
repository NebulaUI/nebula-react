import React, { Component, cloneElement, createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, ALL_TAGS, TOAST_POSITIONS } from '../../constants'
import Item from './Item'

const addToastItem = id => state => ({
  toastItems: {
    ...state.toastItems,
    [id]: { dismissed: false }
  }
})

const removeToastItem = id => state => ({
  toastItems: {
    ...state.toastItems,
    [id]: { dismissed: true }
  }
})

class ToastWrapper extends Component {
  state = { toastItems: {} }

  getChildContext = () => ({
    dismissToastItem: this.dismissItem
  })

  addItemId = id =>
    this.setState(addToastItem(id))

  dismissItem = id => () => {
    if (this.props.onItemDismiss) {
      this.props.onItemDismiss(id)
    }

    return this.setState(removeToastItem(id))
  }

  render() {
    const {
      onItemDismiss,
      tag, position, className, children, ...rest
    } = this.props
    const { toastItems } = this.state
    const enhancedChildren = children && React.Children.map(children, (child) => {
      if (child.type !== Item) {
        return console.warn(`${child} is not a valid child of <Toast.Wrapper />`)
      }

      const { id } = child && child.props

      if (toastItems[id] && toastItems[id].dismissed) {
        return null
      }

      return cloneElement(child, {
        addItemId: this.addItemId,
        dismiss: this.dismissItem(id)
      })
    })

    return E(
      tag || 'ul',
      {
        className: classNames(
          `${NAMESPACE}c-toast`,
          { [`${NAMESPACE}c-toast--${position}`]: position },
          className
        ),
        ...rest
      },
      enhancedChildren
    )
  }
}

ToastWrapper.childContextTypes = {
  dismissToastItem: T.func.isRequired
}

ToastWrapper.propTypes = {
  tag: T.oneOf(ALL_TAGS),
  className: T.string,
  onItemDismiss: T.func,
  position: T.oneOf(TOAST_POSITIONS),
  children: T.node
}

export default ToastWrapper
