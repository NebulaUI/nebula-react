import React from 'react'
import { shallow } from 'enzyme'

import { randomId } from '../../../utils'

import { Form } from '../'

jest.mock('../../../utils')

describe('<Form.SearchInput />', () => {
  it('renders with a random id by default', () => {
    randomId.mockImplementation(() => 'test-id')
    const $ = shallow(<Form.SearchInput id={randomId()} />)
    expect($.prop('id')).toBe('test-id')
  })

  it('takes additional props', () => {
    const $ = shallow(<Form.SearchInput id="test-search" placeholder="Search..." value="foo" defaultValue="foo" />)
    expect($.prop('id')).toBe('test-search')
    expect($.prop('value')).toBe('foo')
    expect($.prop('defaultValue')).toBe('foo')
    expect($.prop('placeholder')).toBe('Search...')
  })

  it('takes an onChange prop', () => {
    const testFn = jest.fn()
    const $ = shallow(<Form.SearchInput onChange={testFn} />)
    expect($.prop('onChange')).toBe(testFn)
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
