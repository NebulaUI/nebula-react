import { Component, createElement as E } from 'react'
import T from 'prop-types'
import { classNames, addEListener, removeEListener } from '../../utils'

class NavbarDropdownToggle extends Component {
  constructor() {
    super()

    this.state = {
      isOpen: false
    }
  }

  componentDidMount() {
    addEListener('click', this.handleClickOutside)
  }

  componentWillUnmount() {
    removeEListener('click', this.handleClickOutside)
  }

  handleClick = () =>
    this.setState({
      isOpen: !this.state.isOpen
    })


  handleClickOutside = ({ target }) =>
    this.setState({
      isOpen: !this.button.contains(target)
        ? false
        : this.state.isOpen
    })

  render() {
    const { tag, children, className, ...rest } = this.props
    return E(
      tag || 'button',
      {
        onClick: this.handleClick,
        ref: (n) => { this.button = n },
        className: classNames(
          'c-navbar__dropdown-toggle', className,
          { 'is-open': this.state.isOpen }
        ),
        ...rest
      },
      children
    )
  }
}

NavbarDropdownToggle.propTypes = {
  className: T.string,
  tag: T.string,
  children: T.node.isRequired
}

export default NavbarDropdownToggle
