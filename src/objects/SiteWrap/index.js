import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'

const SiteWrap = ({ tag, padding, className, children, ...rest }) =>
  E(
    tag || 'div',
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
  tag: T.string,
  padding: T.bool,
  className: T.string,
  children: T.node
}

export { SiteWrap }
