import React from 'react'
import T from 'prop-types'
import classNames from '../../utils/classNames'

const Panels = ({ activeIndex, children, className }) => {
  const filteredChildren = React.Children.map(children, (child, index) => (
    index === activeIndex ? child : null))
  return (
    <div className={classNames('c-tabs__panels', className)}>
      {filteredChildren}
    </div>
  )
}

Panels.propTypes = {
  className: T.string,
  children: T.node,
  activeIndex: T.number
}

export default Panels
