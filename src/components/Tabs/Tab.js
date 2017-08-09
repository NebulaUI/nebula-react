import { createElement as E } from 'react'
import T from 'prop-types'
import { classNames } from '../../utils'

const Tab = ({ node, children, index, activateTab, isActive, className, ...rest }) => {
  const handleClick = () => { activateTab(index) }
  return E(
    node || 'button',
    {
      onClick: handleClick,
      className: classNames(
        'c-tabs__tab', className,
        { 'is-active': isActive }
      ),
      ...rest
    },
    children
  )
}

Tab.propTypes = {
  node: T.string,
  children: T.node,
  activateTab: T.func,
  index: T.number,
  isActive: T.bool,
  className: T.string
}

export default Tab
