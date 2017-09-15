import { BREAKPOINTS } from '../../constants'

const buildBreakpoints = values =>
BREAKPOINTS.map(bp =>
  values.map(value => `${value}@${bp}`))
    .reduce((value, acc) => acc.concat(value, []))

const buildBreakpointValues = values => ([
  ...values,
  ...buildBreakpoints(values)
])

export { buildBreakpointValues }
