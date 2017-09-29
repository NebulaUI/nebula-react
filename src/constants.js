const NAMESPACE = ''

const BREAKPOINTS = ['xs', 'sm', 'md', 'lg']
const MAX_BREAKPOINTS = BREAKPOINTS.map(bp => `max-${bp}`)

const BLOCK_TAGS = [
  'address', 'article', 'aside', 'blockquote', 'canvas', 'dd', 'div', 'dl', 'dt',
  'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4',
  'h5', 'h6', 'header', 'hgroup', 'hr', 'li', 'main', 'nav', 'noscript', 'ol',
  'output', 'p', 'pre', 'section', 'table', 'tfoot', 'ul', 'video'
]

const INLINE_TAGS = [
  'a', 'b', 'big', 'i', 'small', 'tt', 'abbr', 'acronym', 'cite', 'code', 'dfn',
  'em', 'kbd', 'strong', 'samp', 'time', 'var', 'bdo', 'br', 'img', 'map', 'object',
  'q', 'script', 'span', 'sub', 'sup', 'button', 'input', 'label', 'select', 'textatea'
]

const TABLE_COLLAPSE_BREAKPOINTS = ['max-sm', 'max-md']
const TABLE_SPACING = ['sm', 'md']

const ALL_TAGS = [
  ...BLOCK_TAGS,
  ...INLINE_TAGS
]

const LIST_SPACING = ['sm', 'md']

const FLAG_GUTTERS = ['md']

const GRID_GUTTERS = ['sm', 'md', 'lg']
const GRID_FRACTIONS = [
  '1/1', '1/2', '1/3', '2/3', '1/4', '2/4', '3/4', '1/5', '2/5', '3/5', '4/5', '1/6',
  '2/6', '3/6', '4/6', '5/6', '1/8', '2/8', '3/8', '4/8', '5/8', '6/8', '7/8', '1/10',
  '2/10', '3/10', '4/10', '5/10', '6/10', '7/10', '8/10', '9/10', '1/12', '2/12',
  '3/12', '4/12', '5/12', '6/12', '7/12', '8/12', '9/12', '10/12', '11/12'
]

const SECTION_SIZES = ['sm', 'md']
const FLYOUT_DIRECTIONS = ['nw', 'ne', 'sw', 'se']
const TOOLTIP_DIRECTIONS = ['north', 'south', 'east', 'west']

const BUTTON_SIZES = ['sm', 'md', 'lg']
const BUTTON_THEMES = ['alpha', 'beta']

const STATUSES = ['success', 'info', 'warning', 'error']

export {
  NAMESPACE,
  BLOCK_TAGS,
  INLINE_TAGS,
  ALL_TAGS,
  BREAKPOINTS,
  MAX_BREAKPOINTS,
  LIST_SPACING,
  SECTION_SIZES,
  FLAG_GUTTERS,
  FLYOUT_DIRECTIONS,
  GRID_GUTTERS,
  GRID_FRACTIONS,
  BUTTON_SIZES,
  BUTTON_THEMES,
  STATUSES,
  TABLE_COLLAPSE_BREAKPOINTS,
  TABLE_SPACING,
  TOOLTIP_DIRECTIONS
}
