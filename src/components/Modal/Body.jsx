import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const initial = 'c-modal__body'

const Body = ({ node, className, children, ...rest }) =>
  E(
    node || 'div',
    {
      className: classNames(initial, className),
      ...rest
    },
    children
  )

Body.propTypes = {
  node: T.string,
  className: T.string,
  children: T.node.isRequired
}

export default Body
