import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, BLOCK_TAGS } from '../../constants'

const SiteWrap = ({ tag, padding, className, children, ...rest }) =>
  E(
    tag || 'div',
    {
      className: classNames(
        `${NAMESPACE}o-site-wrap`,
        { [`${NAMESPACE}o-site-wrap--padding`]: padding },
        className,
      ),
      ...rest
    },
    children
  )

SiteWrap.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  padding: T.bool,
  className: T.string,
  children: T.node
}

export { SiteWrap }
