import { Component, createElement as E } from 'react'
import T from 'prop-types'
import { classNames, randomId } from '../../utils/'

class FoldableWrapper extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: props.defaultExpanded
        ? props.defaultExpanded === 'expanded'
        : false
    }
  }

  getChildContext = () => ({
    isFoldableOpen: this.isOpen(),
    toggleFoldableOpen: this.toggleOpen,
    foldableId: this.id
  })

  componentWillMount() {
    this.id = this.props.id || randomId()
  }

  toggleOpen = () => {
    const { onFoldableChange, expanded } = this.props
    if (onFoldableChange) {
      onFoldableChange(expanded === 'expanded' ? 'collapsed' : 'expanded')
    }

    if (!this.isControlled()) {
      this.setState({ isOpen: !this.state.isOpen })
    }
  }

  isOpen = () => (this.isControlled()
    ? this.props.expanded === 'expanded'
    : this.state.isOpen)

  isControlled = () =>
    !!this.props.expanded

  render() {
    const {
      defaultExpanded, onFoldableChange, expanded, // eslint-disable-line no-unused-vars
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
  foldableId: T.string.isRequired
}

FoldableWrapper.propTypes = {
  breakpoint: T.oneOf(['max-lg', 'max-md', 'max-sm', 'max-xs']),
  bordered: T.bool,
  node: T.string,
  defaultExpanded: T.oneOf(['expanded', 'collapsed']),
  expanded: T.oneOf(['expanded', 'collapsed']),
  onFoldableChange: T.func,
  children: T.node.isRequired,
  id: T.string,
  className: T.string
}

export default FoldableWrapper
