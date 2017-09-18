import { Component, createElement as E } from 'react'
import T from 'prop-types'
import noScroll from 'no-scroll'

import { classNames } from '../../utils/'
import { BLOCK_TAGS } from '../../constants'

class ModalWrapper extends Component {
  state = {
    isFullyMounted: false,
    clickOutsideDeactivates: false
  }

  getChildContext = () => ({
    closeModal: this.props.closeModal,
    handleModalOverlayMount: this.handleOverlayMount,
    modalClickOutsideDeactivates: this.state.clickOutsideDeactivates,
    modalIsFullyMounted: this.state.isFullyMounted,
    modalWidth: this.props.width
  })

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyUp)
    noScroll.on()

    if (this.props.timeout) {
      setTimeout(this.props.closeModal, this.props.timeout)
    }

    setTimeout(() => {
      this.setState({
        isFullyMounted: true
      })
    }, 0)
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyUp)
    noScroll.off()
  }

  handleOverlayMount = clickOutsideDeactivates =>
    this.setState({
      clickOutsideDeactivates
    })

  handleKeyUp = (e) => {
    if (e.keyCode === 27) {
      this.props.closeModal()
    }
  }

  render() {
    const {
      timeout, width,
      tag, alignTop, closeModal, className, ariaLabel, children, ...rest
    } = this.props

    return E(
      tag || 'div',
      {
        className: classNames(
          'c-modal',
          { 'is-open': this.state.isFullyMounted },
          { 'c-modal--align-top': alignTop },
          className
        ),
        role: 'dialog',
        'aria-label': ariaLabel,
        ...rest
      },
      children
    )
  }
}

ModalWrapper.childContextTypes = {
  closeModal: T.func.isRequired,
  handleModalOverlayMount: T.func.isRequired,
  modalClickOutsideDeactivates: T.bool,
  modalIsFullyMounted: T.bool.isRequired,
  modalWidth: T.number
}

ModalWrapper.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  className: T.string,
  ariaLabel: T.string.isRequired,
  closeModal: T.func.isRequired,
  children: T.node.isRequired,
  timeout: T.number,
  alignTop: T.bool,
  width: T.number
}

export default ModalWrapper
