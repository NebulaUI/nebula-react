import { Component, createElement as E } from 'react'
import T from 'prop-types'
import { classNames, randomId } from '../../utils/'

class FoldableWrapper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: props.defaultOpen
        ? props.defaultOpen === 'open'
        : false
    }
  }

  getChildContext = () => ({
    isFoldableOpen: this.isOpen(),
    toggleFoldableOpen: this.toggleOpen,
    foldableId: this.id,
    foldableDisabled: this.props.disabled
  })

  componentWillMount() {
    this.id = this.props.id || randomId()
  }

  toggleOpen = () => {
    const { onFoldableChange, open } = this.props
    if (onFoldableChange) {
      onFoldableChange(open === 'open' ? 'closed' : 'open')
    }

    if (!this.isControlled()) {
      this.setState({ isOpen: !this.state.isOpen })
    }
  }

  isOpen = () => {
    if (this.props.disabled) {
      return false
    }

    return this.isControlled()
      ? this.props.open === 'open'
      : this.state.isOpen
  }

  isControlled = () =>
    !!this.props.open

  render() {
    const {
      defaultOpen, onFoldableChange, open, // eslint-disable-line no-unused-vars
      node, breakpoint, bordered, children, className, ...rest
    } = this.props
    return E(
      node || 'div',
      {
        className: classNames(
          breakpoint ? `c-foldable@${breakpoint}` : 'c-foldable',
          { 'c-foldable--bordered': bordered },
          { 'is-open': this.isOpen() },
          className
        ),
        'aria-expanded': this.isOpen(),
        ...rest
      },
      children
    )
  }
}

FoldableWrapper.childContextTypes = {
  isFoldableOpen: T.bool.isRequired,
  toggleFoldableOpen: T.func.isRequired,
  foldableId: T.string.isRequired,
  foldableDisabled: T.bool
}

FoldableWrapper.propTypes = {
  breakpoint: T.oneOf(['max-lg', 'max-md', 'max-sm', 'max-xs']),
  bordered: T.bool,
  node: T.string,
  defaultOpen: T.oneOf(['open', 'closed']),
  open: T.oneOf(['open', 'closed']),
  onFoldableChange: T.func,
  children: T.node.isRequired,
  id: T.string,
  disabled: T.bool,
  className: T.string
}

export default FoldableWrapper
