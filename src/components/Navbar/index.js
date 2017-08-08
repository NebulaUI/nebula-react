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
import Wrap from './Wrap'
import Wrapper from './Wrapper'
import Inner from './Inner'

const Navbar = {
  Item,
  Link,
  Logo,
  Nav,
  Overlay,
  Wrap,
  Wrapper,
  Inner,
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
