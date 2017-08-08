import { createElement as E } from 'react'
import T from 'prop-types'

import classNames from '../../utils/classNames'

const SiteWrap = ({ node, padding, className, children, ...rest }) =>
  E(
    node || 'div',
    {
      className: classNames(
        'o-site-wrap',
        { 'o-site-wrap--padding': padding },
        className,
      ),
      ...rest
    },
    children
  )

SiteWrap.propTypes = {
  node: T.string,
  padding: T.bool,
  className: T.string,
  children: T.node
}

export { SiteWrap }
