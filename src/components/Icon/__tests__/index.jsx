import React from 'react'
import { shallow } from 'enzyme'

import { Icon } from '../'

const defaultProps = {
  icon: {
    id: 'T',
    viewBox: 'T'
  }
}

describe('<Icon />', () => {
  it('renders with width and height attributes and default className', () => {
    const props = {
      ...defaultProps,
      width: '20px',
      height: '50px'
    }
    const $ = shallow(<Icon {...props} />)
    expect($.find('svg').prop('style')).toEqual({
      width: '20px',
      height: '50px'
    })
    expect($.find('svg').hasClass('c-icon')).toBe(true)
  })

  it('renders with a defined className', () => {
    const props = {
      ...defaultProps,
      className: 'test'
    }
    const $ = shallow(<Icon {...props} />)
    expect($.find('svg').hasClass('c-icon test')).toBe(true)
  })

  it('renders with appropriate role', () => {
    const $ = shallow(<Icon {...defaultProps} />)
    expect($.find('svg').prop('role')).toBe('presentation')
  })

  it('renders with a viewbox extracted from the icon and xlinkHref from the ID', () => {
    const props = {
      ...defaultProps,
      icon: {
        viewBox: '0 0 438.549 438.549',
        id: 'Test-id'
      }
    }
    const $ = shallow(<Icon {...props} />)
    expect($.find('svg').prop('viewBox')).toBe('0 0 438.549 438.549')
    expect($.find('use').prop('xlinkHref')).toBe('#Test-id')
  })
})
