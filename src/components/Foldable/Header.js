import { Component, createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, BLOCK_TAGS } from '../../constants'

class FoldableHeader extends Component {
  render() {
    const {
      padding,
      tag,
      className,
      children,
      ...rest
    } = this.props
    const {
      toggleFoldableOpen,
      foldableId,
      foldableDisabled
    } = this.context
    const handleClick = (e) => {
      if (e.detail !== 0) {
        this.button.blur()
      }

      toggleFoldableOpen()
    }
    return E(
      tag || 'div',
      {
        className: classNames(
          `${NAMESPACE}c-foldable__header`,
          { [`${NAMESPACE}c-foldable__header--padding`]: padding },
          className
        ),
        ...rest
      },
      E(
        'button',
        {
          className: `${NAMESPACE}c-foldable__toggle`,
          onClick: handleClick,
          'aria-controls': foldableId,
          disabled: foldableDisabled,
          ref: (n) => { this.button = n }
        }
      ),
      children
    )
  }
}

FoldableHeader.contextTypes = {
  toggleFoldableOpen: T.func.isRequired,
  foldableId: T.string.isRequired,
  foldableDisabled: T.bool
}

FoldableHeader.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  className: T.string,
  children: T.node.isRequired
}

export default FoldableHeader
