import { Component, createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, ALL_TAGS } from '../../constants'

class ToastItem extends Component {
  state = { hasMounted: false }

  getChildContext = () => ({
    toastItemId: this.props.id
  })

  componentWillMount() {
    this.props.addItemId(this.props.id)
  }

  componentDidMount() {
    this.node.focus()

    setTimeout(() => {
      this.setState({ hasMounted: true })
    }, 0)

    if (this.props.timeout) {
      this.handleTimeout()
    }
  }

  handleTimeout = () => {
    setTimeout(this.props.dismiss, this.props.timeout)
  }

  handleKeyUp = ({ keyCode }) => {
    if (keyCode === 27) {
      this.props.dismiss()
    }
  }

  render() {
    const {
      addItemId, dismiss, timeout,
      tag, className, children, ...rest
    } = this.props
    return E(
      tag || 'li',
      {
        className: classNames(
          `${NAMESPACE}c-toast__item`,
          { [`${NAMESPACE}c-toast__item--has-mounted`]: this.state.hasMounted },
          className
        ),
        onKeyUp: this.handleKeyUp,
        tabIndex: '0',
        ref: (n) => { this.node = n },
        role: 'alert',
        ...rest
      },
      children
    )
  }
}

ToastItem.childContextTypes = {
  toastItemId: T.string.isRequired
}

ToastItem.propTypes = {
  id: T.string.isRequired,
  tag: T.oneOf(ALL_TAGS),
  timeout: T.number,
  className: T.string,
  children: T.node.isRequired,
  dismiss: T.func,
  addItemId: T.func
}

export default ToastItem
