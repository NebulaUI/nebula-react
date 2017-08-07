import Item from './Item'
import Link from './Link'
import Dropdowntoggle from './DropdownToggle'
import DropdownContent from './DropdownContent'
import DropdownWrapper from './DropdownWrapper'
import Logo from './Logo'
import Nav from './Nav'
import Overlay from './Overlay'
import ToggleWrapper from './ToggleWrapper'
import Bars from './Bars'
import Inner from './Inner'
import Wrapper from './Wrapper'

const Navbar = {
  Item,
  Link,
  Logo,
  Nav,
  Overlay,
  Inner,
  Wrapper,
  Toggle: {
    Wrapper: ToggleWrapper,
    Bars
  },
  Dropdown: {
    Content: DropdownContent,
    Toggle: Dropdowntoggle,
    Wrapper: DropdownWrapper
  }
}

export { Navbar }
