import { Component, createElement as E } from 'react'
import T from 'prop-types'

import { classNames, getHeight } from '../../utils/'
import { NAMESPACE, BLOCK_TAGS } from '../../constants'

class FoldableBody extends Component {
  componentDidMount() {
    if (this.props.transition) {
      this.setInitialStyles()
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.transition) {
      if (prevProps.transition !== this.props.transition) {
        return this.setInitialStyles()
      }
      return this.executeTransitions()
    }

    if (prevProps.transition !== this.props.transition) {
      return this.resetStyles()
    }

    return undefined
  }

  setStyles = (styles) => {
    Object.assign(this.node.style, styles)
  }

  setInitialStyles = () => {
    this.setStyles({ transition: `height ${this.props.transitionDuration}ms` })
    if (this.context.isFoldableOpen) {
      this.setStyles({ height: 'auto' })
      this.setHeightAfterImmediateTimeout(getHeight(this.node))
    } else {
      this.setStyles({ display: 'none', overflow: 'hidden' })
    }
  }

  setHeightAfterImmediateTimeout = height =>
    setTimeout(() => {
      this.setStyles({ height: `${height}px` })
    }, 0)

  resetStyles = () => {
    this.node.style.removeProperty('transition')
    this.node.style.removeProperty('height')
    this.node.style.removeProperty('display')
    this.node.style.removeProperty('overflow')
  }

  closing = false

  transitionOpen = () => {
    if (this.node.style.overflow === 'hidden') {
      const openBeforeClosingEnd = () => {
        const tempHeight = getHeight(this.node)
        this.setStyles({ height: 'auto' })
        const height = getHeight(this.node)
        this.setStyles({ height: `${tempHeight}px` })
        this.setHeightAfterImmediateTimeout(height)
      }

      const openAfterCloseEnd = () => {
        this.setStyles({ height: 'auto' })
        const height = getHeight(this.node)
        this.setStyles({ height: 0 })
        this.setHeightAfterImmediateTimeout(height)
      }

      this.setStyles({ display: 'block' })

      if (this.closing) {
        openBeforeClosingEnd()
      } else {
        openAfterCloseEnd()
      }

      this.handleTransitionOpenEnd()
    }
  }

  handleTransitionOpenEnd = () => {
    setTimeout(() => {
      if (this.context.isFoldableOpen) {
        this.setStyles({ overflow: 'visible', height: 'auto' })
      }
    }, this.props.transitionDuration)
  }

  transitionClose = () => {
    this.closing = true
    const height = getHeight(this.node)
    this.setStyles({ height: `${height}px` })

    setTimeout(() => {
      this.setStyles({ overflow: 'hidden', height: 0 })
    }, 0)

    setTimeout(() => {
      if (!this.context.isFoldableOpen) {
        this.setStyles({ display: 'none' })
        this.closing = false
      }
    }, this.props.transitionDuration)
  }

  executeTransitions = () => {
    if (this.context.isFoldableOpen) {
      this.transitionOpen()
    } else {
      this.transitionClose()
    }
  }

  render() {
    const { tag, className, children, transitionDuration, transition, ...rest } = this.props
    const { isFoldableOpen, foldableId } = this.context

    return E(
      tag || 'div',
      {
        className: classNames(
          `${NAMESPACE}c-foldable__body`,
          { [`${NAMESPACE}c-foldable__body--transition`]: transition },
          className
        ),
        ref: (n) => { this.node = n },
        id: foldableId,
        style: { height: this.height },
        'aria-hidden': !isFoldableOpen,
        ...rest
      },
      children
    )
  }
}

FoldableBody.defaultProps = {
  transitionDuration: 300
}

FoldableBody.contextTypes = {
  isFoldableOpen: T.bool.isRequired,
  foldableId: T.string.isRequired
}

FoldableBody.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  className: T.string,
  transition: T.bool,
  transitionDuration: T.number,
  children: T.node.isRequired
}

export default FoldableBody
