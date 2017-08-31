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
  it('renders with verticalAlign, width and height attributes and default className', () => {
    const props = {
      ...defaultProps,
      width: '20px',
      height: '50px',
      verticalAlign: 'sub'
    }
    const $ = shallow(<Icon {...props} />)
    expect($.find('svg').prop('style')).toEqual({
      width: '20px',
      height: '50px',
      verticalAlign: 'sub'
    })
    expect($.hasClass('c-icon')).toBe(true)
    expect($.find('svg').hasClass('c-icon__svg')).toBe(true)
  })

  it('renders with a defined className', () => {
    const props = {
      ...defaultProps,
      className: 'test'
    }
    const $ = shallow(<Icon {...props} />)
    expect($.hasClass('c-icon test')).toBe(true)
  })

  it('renders with icon to the left of children', () => {
    const props = {
      ...defaultProps,
      iconLeft: true
    }
    const $ = shallow(<Icon {...props}>Test</Icon>)
    expect($.childAt(0).hasClass('c-icon__svg c-icon__svg--left')).toBe(true)
    expect($.childAt(1).hasClass('c-icon__text')).toBe(true)
    expect($.childAt(1).text()).toBe('Test')
  })

  it('renders with icon to the right of children', () => {
    const props = {
      ...defaultProps,
      iconRight: true
    }
    const $ = shallow(<Icon {...props}>Test</Icon>)
    expect($.childAt(0).hasClass('c-icon__text')).toBe(true)
    expect($.childAt(0).text()).toBe('Test')
    expect($.childAt(1).hasClass('c-icon__svg c-icon__svg--right')).toBe(true)
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
