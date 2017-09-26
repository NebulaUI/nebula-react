import { createElement as E } from 'react'
import T from 'prop-types'

import { classNames } from '../../utils/'
import { NAMESPACE, BLOCK_TAGS } from '../../constants'

const enhancePercentString = percent => `${percent && percent.endsWith('%') ? percent : `${percent}%`}`

const ProgressBarIndicator = ({ tag, animated, percent, className, ...rest }) =>
  E(
    tag || 'div',
    {
      style: { width: enhancePercentString(percent) },
      className: classNames(
        `${NAMESPACE}c-progress-bar__indicator`,
        { [`${NAMESPACE}c-progress-bar__indicator--animated`]: animated },
        className
      ),
      role: 'progressbar',
      'aria-valuenow': enhancePercentString(percent),
      'aria-valuemin': '0%',
      'aria-valuemax': '100%',
      ...rest
    },
  )

ProgressBarIndicator.propTypes = {
  tag: T.oneOf(BLOCK_TAGS),
  className: T.string,
  percent: T.string,
  animated: T.bool
}

export default ProgressBarIndicator
