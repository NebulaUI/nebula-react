import React from 'react'
import { shallow } from 'enzyme'

import { Form } from '../'

describe('<Form.SearchInput />', () => {
  it('takes additional props', () => {
    const $ = shallow(<Form.SearchInput id="test-search" placeholder="test" value="foo" defaultValue="foo" />)
    expect($.prop('id')).toBe('test-search')
    expect($.prop('value')).toBe('foo')
    expect($.prop('defaultValue')).toBe('foo')
    expect($.prop('placeholder')).toBe('test')
  })

  it('renders with a default placeholder value', () => {
    const $ = shallow(<Form.SearchInput />)
    expect($.prop('placeholder')).toBe('Search...')
  })

  it('renders with additional attributes', () => {
    const $ = shallow(<Form.SearchInput name="test" style={{ position: 'relative' }} />)
    expect($.prop('name')).toBe('test')
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
  })

  it('renders with `disabled` attr and is non selectable', () => {
    const $ = shallow(<Form.SearchInput disabled />)
    expect($.prop('disabled')).toBe(true)
  })
})
