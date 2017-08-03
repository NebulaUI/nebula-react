import { createElement as E } from 'react'
import T from 'prop-types'

import classNames from '../../utils/classNames'
import buildClassName from '../../utils/buildClassName'

const Section = ({ node, size, children }) =>
  E(
    node || 'section',
    {
      className: classNames(
        size
          ? buildClassName('o-section-', size)
          : null,
      )
    },
    children
  )

Section.propTypes = {
  node: T.string,
  children: T.node
}

export { Section }

