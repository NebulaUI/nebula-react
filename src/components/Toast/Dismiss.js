import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, ALL_TAGS } from '../../constants'

const ToastDismiss = ({ children, className, tag, ...rest }, { dismissToastItem, toastItemId }) => {
  const handleClick = () => dismissToastItem(toastItemId)()
  return E(
    tag || 'button',
    {
      className: classNames(
        `${NAMESPACE}c-toast__dismiss`,
        { [`${NAMESPACE}c-toast__dismiss--styled`]: !children },
        className
      ),
      onClick: handleClick,
      ...rest
    },
    children
  )
}

ToastDismiss.contextTypes = {
  dismissToastItem: T.func.isRequired,
  toastItemId: T.string.isRequired
}

ToastDismiss.propTypes = {
  tag: T.oneOf(ALL_TAGS),
  className: T.string,
  children: T.node
}

export default ToastDismiss
