import React from 'react'
import { shallow, mount } from 'enzyme'

import { LoadingIcon } from '../'
import { Icon } from '../../Icon'

const defaultProps = {
  iconPosition: 'left'
}

describe('<LoadingIcon />', () => {
  it('renders <Icon />', () => {
    const $ = shallow(<LoadingIcon {...defaultProps} />)
    expect($.type()).toBe(Icon)
  })

  it('renders with a default fill', () => {
    const $ = mount(<LoadingIcon {...defaultProps} />)
    expect($.find(Icon).prop('icon')().props.style.fill).toBe('8bc34a')
  })

  it('renders with a user defined fill', () => {
    const props = {
      ...defaultProps,
      fill: 'red'
    }
    const $ = mount(<LoadingIcon {...props} />)
    expect($.find(Icon).prop('icon')().props.style.fill).toBe('red')
  })

  it('renders with a width and height matching the size', () => {
    const props = {
      ...defaultProps,
      size: 100
    }
    const $ = mount(<LoadingIcon {...props} />)
    expect($.find(Icon).prop('icon')().props.style).toMatchObject({
      width: 100,
      height: 100
    })
  })

  it('renders with the icon to the left', () => {
    const props = {
      ...defaultProps,
      iconPosition: 'left'
    }
    const $ = mount(<LoadingIcon {...props}>Loading...</LoadingIcon>)
    expect($.find(Icon).childAt(1).text()).toBe('Loading...')
    expect($.find(Icon).prop('icon')().props.className).toBe('c-icon__svg c-icon__svg--left')
  })

  it('renders with the icon to the right', () => {
    const props = {
      ...defaultProps,
      iconPosition: 'right'
    }
    const $ = mount(<LoadingIcon {...props}>Loading...</LoadingIcon>)
    expect($.find(Icon).childAt(0).text()).toBe('Loading...')
    expect($.find(Icon).prop('icon')().props.className).toBe('c-icon__svg c-icon__svg--right')
  })

  it('renders with an additional className', () => {
    const props = {
      ...defaultProps,
      className: 'test'
    }
    const $ = mount(<LoadingIcon {...props} />)
    expect($.find(Icon).hasClass('c-icon')).toBe(true)
    expect($.find(Icon).hasClass('test')).toBe(true)
  })

  it('renders with a user defined tag', () => {
    const props = {
      ...defaultProps,
      tag: 'span'
    }
    const $ = mount(<LoadingIcon {...props} />)
    expect($.find(Icon).prop('tag')).toBe('span')
  })

  it('renders vertically aligned', () => {
    const props = {
      ...defaultProps,
      iconPosition: 'left',
      verticalAlign: 'sub'
    }
    const $ = mount(<LoadingIcon {...props}>label</LoadingIcon>)
    expect($.find(Icon).childAt(1).prop('style')).toMatchObject({ verticalAlign: 'sub' })
  })
})
